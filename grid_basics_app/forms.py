from typing import Any, Mapping
from django.forms import Form, ChoiceField, BooleanField, CharField, MultipleChoiceField, CheckboxSelectMultiple, RadioSelect
from django.forms.renderers import BaseRenderer
from django.forms.utils import ErrorList
from .models import Question

# class TestForm(Form):

#     def __init__(self, questions, data=None, *args, **kwargs):
#         super(TestForm, self).__init__(data, *args, **kwargs)
#         if questions:
#             self.questions = questions
#             for q in questions:
#                 if q.type == Question.Types.SINGLE_CHOICE:
#                     self.fields[q.question] = ChoiceField(choices=((c.pk, c.value) for c in q.answer_set.all()), widget=RadioSelect)
#                 elif q.type == Question.Types.MULTIPLE_CHOICE:
#                     self.fields[q.question] = MultipleChoiceField(choices=((c.pk, c.value) for c in q.answer_set.all()), widget = CheckboxSelectMultiple)
#                 else:
#                     self.fields[q.question] = CharField()

#     def is_valid(self) -> bool:
#         if super().is_valid():
#             return True
#         else:
#             return False

