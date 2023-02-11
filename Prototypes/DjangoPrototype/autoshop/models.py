from django.db import models

# Create your models here.
from django.db import models


class Vehicle(models.Model):
    name = models.CharField(max_length=200)
    vim = models.IntegerField()
    location = models.CharField(max_length=200)
    isPurchased = models.BooleanField()
    isPending = models.BooleanField()
    reservedDays = models.JSONField()
    vehicleType = models.CharField(max_length=20)
    isInsured = models.BooleanField()
    isLoadJacked = models.BooleanField()
    dateCheckedOut = models.DateTimeField()
    dateCheckedIn = models.DateTimeField()
    image = models.TextField()  # string to the url of the image
    # automatically assigns an id to each instance

    def __str__(self):
        return self.name


class User(models.Model):
    name = models.CharField(max_length=200)
    birthDate = models.DateTimeField('date of birth')
    username = models.CharField(max_length=12)
    password = models.CharField(max_length=20)
    # automatically assigns an id to each instance
    balance = models.FloatField()
    accessLevel = models.CharField(max_length=20)
    email = models.EmailField(max_length=49)
    phone = models.IntegerField()
    needHelp = models.BooleanField()
    ethicsViolation = models.TextField()
    location = models.CharField(max_length=20)

    def __str__(self):
        return self.username
