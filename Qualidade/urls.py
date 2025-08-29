from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Aplicativo5s.urls')),  # conecta as rotas do app
]
