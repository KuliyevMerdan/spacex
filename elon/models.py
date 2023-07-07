from django.db import models

class Menu(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    link = models.CharField(max_length=500, verbose_name='Ссылка')

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Пункт'
        verbose_name_plural = 'Пункты'

class Feature(models.Model):
    top_line = models.CharField(max_length=100, verbose_name='Верхняя строка')
    mid_line = models.CharField(max_length=100, verbose_name='Средняя строка')
    bottom_line = models.CharField(max_length=100, verbose_name='Нижняя строка')

    class Meta:
        verbose_name = 'Преимущество'
        verbose_name_plural = 'Преимущества'

