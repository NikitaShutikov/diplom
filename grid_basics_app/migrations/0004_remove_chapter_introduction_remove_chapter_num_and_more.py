# Generated by Django 5.0.4 on 2024-05-13 04:44

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('grid_basics_app', '0003_chapter_url_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chapter',
            name='introduction',
        ),
        migrations.RemoveField(
            model_name='chapter',
            name='num',
        ),
        migrations.AddField(
            model_name='chapter',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(default='hey', verbose_name='содержимое'),
            preserve_default=False,
        ),
    ]
