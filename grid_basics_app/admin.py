from django.contrib import admin
from django.contrib.auth.models import Group, User
import nested_admin
from .models import Chapter, Test, Question, Answer
from django.utils.safestring import mark_safe
from django.urls import reverse

class AnswerInline(nested_admin.NestedStackedInline):
    model = Answer
    extra = 0
    show_change_link = True


class QuestionInline(nested_admin.NestedStackedInline):
    model = Question
    extra = 0
    show_change_link = True
    inlines = [AnswerInline]

        
class TestInline(nested_admin.NestedStackedInline):
    model = Test

    max_num = 1
    extra = 0
    show_change_link = True
    inlines = [QuestionInline]
    


class ChapterAdmin(nested_admin.NestedModelAdmin):
    model = Chapter
    inlines = [
        TestInline
    ]
    list_display = ['__str__']
    search_fields = ["name"]
    fields = ['index', 'name', 'content']
    ordering = ('index',)
    


admin.site.register(Chapter, ChapterAdmin)
admin.site.unregister(User)
admin.site.unregister(Group)