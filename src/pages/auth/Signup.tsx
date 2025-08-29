import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    phone: '',
    email: '',
    university: '',
    faculty: '',
    specialty: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center">
      <div className="w-[700px] m-auto relative px-12 py-10 bg-white shadow-lg rounded-[10px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium text-center mb-8 text-gray-900">
            Создайте свой аккаунт на site.kz
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                label="Фамилия"
                placeholder="Иванов"
                required
              />
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                label="Имя"
                placeholder="Иван"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                label="Отчество"
                placeholder="Иванович"
                required
              />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                label="Номер телефона"
                placeholder="+7 (999) 123-45-67"
                required
              />
            </div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              label="Email"
              placeholder="example@mail.com"
              required
            />
            <Input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              label="Учебное заведение"
              placeholder="Казахский национальный университет им. аль-Фараби"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="faculty"
                value={formData.faculty}
                onChange={handleInputChange}
                label="Факультет"
                placeholder="Факультет информационных технологий"
                required
              />

              <Input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                label="Специальность"
                placeholder="Программная инженерия"
                required
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" fullWidth size="sm">
                Зарегистрироваться
              </Button>
            </div>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Уже есть аккаунт? </span>
              <Button variant="link" size="sm" onClick={() => (window.location.href = '/login')}>
                Войти
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
