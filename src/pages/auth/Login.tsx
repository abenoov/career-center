import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center">
      <div className="w-120 m-auto relative px-12 py-10 bg-white shadow-lg rounded-[10px]">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-medium text-center mb-8 text-gray-900">Добро пожаловать!</h2>

          <form className="space-y-3">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              label="Адрес электронной почты"
              placeholder="john.doe@example.com"
              required
            />

            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              label="Пароль"
              placeholder="•••••••••••••"
              required
            />

            <Button variant="primary" fullWidth size="sm" type="submit" className="mt-4">
              Войти
            </Button>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Нет аккаунта? </span>
              <Button variant="link" size="sm" onClick={() => (window.location.href = '/sign-up')}>
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
