from django.urls import path
from . import views

urlpatterns = [
    path('', views.TelaInicial, name='Tela-Inicial'), 


    path("qualidade/", views.qualidade_formulario, name="qualidade"),
]


