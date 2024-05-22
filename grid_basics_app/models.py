from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
import re


class Chapter(models.Model):
    url_name = models.CharField(max_length=64, verbose_name='url имя', blank=True, default='', unique=True)
    name = models.CharField(max_length=64, verbose_name="название главы", unique=True)
    content = RichTextUploadingField(verbose_name="содержимое")
    index = models.IntegerField(verbose_name='индекс')
    
    def save(self, force_insert=False, force_update=False):
        self.url_name = re.sub(r'[^\\da-zA-Zа-яёА-ЯЁ0-9 ]', '', self.name).lower().replace(' ', '_')
        super(Chapter, self).save(force_insert, force_update)
        
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "глава"
        verbose_name_plural = "главы"


class Test(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    class Meta:
        verbose_name = "тест"
        verbose_name_plural = "тесты"
        
class Question(models.Model):
    class Types(models.IntegerChoices):
        SINGLE_CHOICE = 0, 'Одиночный выбор'
        MULTIPLE_CHOICE = 1, 'Множественный выбор'
        TEXT = 2, 'Текст'

    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    value = models.CharField(max_length=128, verbose_name='вопрос')
    type = models.IntegerField(choices=Types.choices, default=Types.SINGLE_CHOICE, verbose_name="Тип вопроса")
    class Meta:
        verbose_name = "вопрос"
        verbose_name_plural = "вопросы"
        
class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    value = models.CharField(max_length=128, verbose_name="ответ")
    is_right = models.BooleanField(default=False, verbose_name="он правильный?")
    class Meta:
        verbose_name = "ответ"
        verbose_name_plural = "ответы"