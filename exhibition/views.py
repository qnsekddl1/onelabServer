import mimetypes
from urllib.parse import quote
from django.utils.encoding import iri_to_uri

from django.core.files.storage import FileSystemStorage
from django.db import transaction
from django.http import FileResponse
from django.shortcuts import render, redirect
from django.views import View

from exhibition.models import Exhibition, ExhibitionFile
from file.models import File
from member.models import Member
from school.models import School


class ExhibitionWriteView(View):
    def get(self, request):
        return render(request, 'exhibition/write.html')

    @transaction.atomic
    def post(self, request):
        data = request.POST

        files = request.FILES

        member = Member(**request.session['member'])
        school=School.objects.get(member=member)
        # school = School(**request.session['member'])

        exhibition_url = data['exhibition-url']
        print(exhibition_url)

        data = {
            'exhibition_title' : data['exhibition-title'],
            'exhibition_content' : data['exhibition-content'],
            'school' : school,
            'exhibition_url' : data['exhibition-url']
        }

        exhibition = Exhibition.objects.create(**data)

        for key, file in request.FILES.items():
            file_instance = File.objects.create(file_size=file.size)

            if key == 'upload4':  # upload4 파일이면 download_path 필드에 저장
                ExhibitionFile.objects.create(file=file_instance, path=None, download_path=file, preview=False,
                                              exhibition=exhibition)
            else:
                ExhibitionFile.objects.create(file=file_instance, path=file, download_path=None, preview=key=='upload1',
                                              exhibition=exhibition)

        return redirect(exhibition.get_absolute_url())

class ExhibitionDetailView(View):
    def get(self, request):
        exhibition = Exhibition.objects.get(id=request.GET['id'])
        school = exhibition.school
        member = school.member

        exhibition.exhibition_view_count += 1
        exhibition.save(update_fields=['exhibition_view_count'])

        context = {
            'exhibition' : exhibition,
            'exhibition_files' : list(exhibition.exhibitionfile_set.all()),
            'member_name' : member.member_name
        }

        return render(request, 'exhibition/detail.html', context)

class ExhibitionFileDownloadView(View):
    def get(self, request, file_path, *args, **kwargs):
        # file_path = file_path.replace('-', '/')
        file_path = file_path
        file_name = file_path.split('/')[-1]
        print('====================')
        print(file_name)
        # file_path: 파일이 있는 경로 설정, 경로에 파일 이름 포함 가능
        fs = FileSystemStorage()
        # fs.open("파일 이름", 'rb')
        content_type, _ = mimetypes.guess_type(file_name)
        response = FileResponse(fs.open(file_path, 'rb'),
                                content_type=content_type)
        # response['Content-Disposition'] = f'attachment; filename="{file_name}"'
        encoded_file_name = quote(file_name)
        print(encoded_file_name)
        response['Content-Disposition'] = f'attachment; filename="{encoded_file_name}"; filename*=UTF-8\'\'{encoded_file_name}'
        return response

class ExhibitionListView(View):
    def get(self, request):
        member = Member(**request.session['member'])
        context = {
            'exhibitions' : list(Exhibition.enabled_objects.all()),
            'member' : member
        }

        return render(request, 'exhibition/list.html', context)

class ExhibitionUpdateView(View):
    def get(self, request, id):
        exhibition = Exhibition.objects.get(id=id)
        exhibitionfiles = ExhibitionFile.objects.filter(exhibition=exhibition)


        context = {
            'exhibition' : exhibition,
            'exhibition_files' : exhibitionfiles,

        }

        return render(request, 'exhibition/update.html', context)

    @transaction.atomic
    def post(self, request, id):
        data = request.POST

        exhibition = Exhibition.objects.get(id=id)
        exhibition.exhibition_title = data['exhibition-title']
        exhibition.exhibition_content = data['exhibition-content']
        exhibition.exhibition_url = data['exhibition-url']

        exhibition.save(update_fields=['exhibition_title', 'exhibition_content', 'exhibition_url'])

        exhibition.exhibitionfile_set.all().delete()

        for key, file in request.FILES.items():
            file_instance = File.objects.create(file_size=file.size)

            if key == 'upload4':  # upload4 파일이면 download_path 필드에 저장
                ExhibitionFile.objects.create(file=file_instance, path=None, download_path=file, preview=False,
                                              exhibition=exhibition)
            else:
                ExhibitionFile.objects.create(file=file_instance, path=file, download_path=None, preview=key=='upload1',
                                              exhibition=exhibition)

        return redirect(exhibition.get_absolute_url())