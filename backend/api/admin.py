from django.contrib import admin
from .models import Appointment, Binder, Client, Payment, Partner

admin.site.register(Client)
admin.site.register(Payment)
admin.site.register(Partner)
admin.site.register(Appointment)
admin.site.register(Binder)

