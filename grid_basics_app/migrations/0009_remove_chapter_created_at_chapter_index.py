# Generated by Django 5.0.4 on 2024-05-16 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grid_basics_app', '0008_rename_question_question_value_alter_answer_value_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chapter',
            name='created_at',
        ),
        migrations.AddField(
            model_name='chapter',
            name='index',
            field=models.IntegerField(default=0, verbose_name='индекс'),
            preserve_default=False,
        ),
    ]
