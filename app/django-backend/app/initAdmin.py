from django.contrib.auth import get_user_model

User = get_user_model()
User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@admin.com', 'pass')
