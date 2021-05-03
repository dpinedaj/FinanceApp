"""
Django settings for FinanceApp project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os


# CORS
ALLOWED_HOSTS = eval(os.environ.get('ALLOWED_HOSTS', "['*']"))
CORS_ORIGIN_ALLOW_ALL = bool(int(os.environ.get('CORS_ORIGIN_ALLOW_ALL', '1')))
CORS_ALLOW_CREDENTIALS = bool(int(os.environ.get('CORS_ALLOW_CREDENTIALS', '1')))


# VARIABLES
# Django
DEBUG = bool(int(os.environ.get('DEBUG', '1')))
SECRET_KEY = os.environ.get('SECRET_KEY', 'kx-ib@csuc+u*x1d8*v_2$s3asz5v@k9xlg(w7*b)n74!+!z4j')

# DataBase
DB_ENGINE=os.environ.get('DB_ENGINE', 'django.db.backends.postgresql_psycopg2')
POSTGRES_DB=os.environ.get('POSTGRES_DB', 'pruebas')
POSTGRES_USER=os.environ.get('POSTGRES_USER', 'admin')
POSTGRES_PASSWORD=os.environ.get('POSTGRES_PASSWORD', 'admin')
DB_HOST=os.environ.get('DB_HOST', 'localhost')
DB_PORT=int(os.environ.get('DB_PORT', 5432))

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'drf_yasg',
    'spendings',
    'incomes',
    "investments",
    "results",
    "middlewares"
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ]
}

# 'DEFAULT_PERMISSION_CLASSES': [
#     'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
#
# ]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    #'middlewares.corsMiddleware.open_access_middleware'
]

ROOT_URLCONF = 'FinanceApp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'FinanceApp.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': DB_ENGINE,
        'NAME': POSTGRES_DB,
        'USER': POSTGRES_USER,
        'PASSWORD': POSTGRES_PASSWORD,
        'HOST': DB_HOST,
        'PORT': DB_PORT,
    },
}

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/Bogota'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(os.path.split(BASE_DIR)[0], 'static_root')


