from django.db import models


class Client(models.Model):
    PROSPECTIVE = 0
    CURRENT = 1
    PAST = 2

    CLIENT_STATUS_CHOICES = (
        (PROSPECTIVE, 'Prospective'),
        (CURRENT, 'Current'),
        (PAST, 'Past')
    )

    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50, db_index=True)
    last_name = models.CharField(max_length=50, db_index=True)
    birthday = models.DateField(db_index=True)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2)
    zip = models.IntegerField()
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=CLIENT_STATUS_CHOICES, default=PROSPECTIVE)
    due_date = models.DateField(null=True)
    has_binder = models.BooleanField(default=False)
    email = models.CharField(max_length=50, null=True)
    phone = models.CharField(max_length=14, null=True)


    def __str__(self):
        return "{0} {1}".format(
            self.first_name, self.last_name)


class Partner(models.Model):

    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50, db_index=True)
    last_name = models.CharField(max_length=50, db_index=True)
    birthday = models.DateField(db_index=True)
    client = models.ForeignKey(Client)


class Payment(models.Model):

    id = models.AutoField(primary_key=True)
    due = models.DateField()
    is_paid = models.BooleanField(default=False)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    notes = models.TextField()


class Appointment(models.Model):

    id = models.AutoField(primary_key=True)
    date_time = models.DateTimeField()
    completed = models.BooleanField()


class Binder(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
