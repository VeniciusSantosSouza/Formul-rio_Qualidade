from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

#def TelaInicial(request):
  #template = loader.get_template('Login.html')
  #return HttpResponse(template.render())

def TelaInicial(request):
  template = loader.get_template('Tela-Inicial.html')
  return HttpResponse(template.render())


def qualidade_formulario(request):
  return render(request, "Forms-Admis.html")
