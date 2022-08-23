from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')
        write_only_fields = ('username',)

    def validate(self, data):
        # Making sure the username always matches the email
        email = data.get('email', None)
        if email:
            data['username'] = email
        return data


class UserRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields ='__all__'
        email = serializers.EmailField()
        first_name = serializers.CharField(max_length=10, required=False)
        last_name = serializers.CharField(max_length=10, required=False)
        password = serializers.CharField(max_length=10)
        password_repeat = serializers.CharField(max_length=10)
        validation_code = serializers.CharField(max_length=6)



    def validate(self, data):

        if not self.initial_data['password'] or not self.initial_data['password_repeat']:
            raise serializers.ValidationError("Please enter a password and "
                 "confirm it.")
        if self.initial_data['password'] != self.initial_data['password_repeat']:
            raise serializers.ValidationError("Those passwords don't match.")
        return data





