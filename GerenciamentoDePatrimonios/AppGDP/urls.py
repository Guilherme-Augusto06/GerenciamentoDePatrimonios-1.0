from django.urls import path
from . import views
urlpatterns = [
        path('', views.homepage, name="homepage"),         # Inclui as urls do app blog
        path('homepageDark', views.homepageDark, name="homepageDark"),   # Inclui as urls do app blog
]