from django.shortcuts import render


def index(request):
    return render(request, 'accounts/index.html')


def login(request):
    return render(request, 'accounts/login.html')


def register(request):
    return render(request, 'accounts/register.html')


def add_user(request):
    return render(request, '')


def logout(request):
    return
