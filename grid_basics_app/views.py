from django.shortcuts import render
from django.views import View
from .models import Chapter



class IndexView(View):
    def get(self, request):
        chapters = Chapter.objects.all().order_by('index')
        return render(request, 'index.html', locals())
    
class ChapterView(View):
    # def get_common_vars(self, chapter_url_name, request=None):
    #     context = {}
    #     context['chapters'] = Chapter.objects.all().order_by('created_at')
    #     context['chapter'] = Chapter.objects.filter(url_name=chapter_url_name)[0]
    #     context['prev_chap'] = Chapter.objects.filter(created_at__lt=context['chapter'].created_at).order_by('-created_at').first()
    #     context['next_chap'] = Chapter.objects.filter(created_at__gt=context['chapter'].created_at).order_by('created_at').first()
    #     test = context['chapter'].test_set.all().first()
    #     if test:
    #         context['test_form'] = TestForm(test.question_set.all(), request.POST)
    #     return context
        
    def get(self, request, chapter_url_name):
        context = {}
        context['chapters'] = Chapter.objects.all().order_by('index')
        context['chapter'] = Chapter.objects.filter(url_name=chapter_url_name)[0]
        context['prev_chap'] = Chapter.objects.filter(index__lt=context['chapter'].index).order_by('-index').first()
        context['next_chap'] = Chapter.objects.filter(index__gt=context['chapter'].index).order_by('index').first()
        context['test'] = context['chapter'].test_set.all().first()
        return render(request, 'chapter.html', context)
    
    # def post(self, request, chapter_url_name):
    #     context = self.get_common_vars(chapter_url_name, request)
    #     return render(request, 'grid_basics_app/chapter.html', context)