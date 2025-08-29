import { useState } from 'react';
import Button from '../components/Button';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Какая сфера деятельности вас больше всего интересует?',
    options: [
      'IT и технологии',
      'Финансы и банковское дело',
      'Маркетинг и реклама',
      'Образование',
      'Здравоохранение',
    ],
  },
  {
    id: 2,
    text: 'Предпочитаете работать в команде или индивидуально?',
    options: ['В команде', 'Индивидуально', 'Комбинированно', 'Зависит от проекта'],
  },
  {
    id: 3,
    text: 'Какой формат работы вам больше подходит?',
    options: ['Офис', 'Удаленная работа', 'Гибридный формат', 'Командировки'],
  },
  {
    id: 4,
    text: 'Важен ли для вас карьерный рост?',
    options: ['Очень важен', 'Важен', 'Не очень важен', 'Не важен'],
  },
  {
    id: 5,
    text: 'Какой размер компании вам предпочтителен?',
    options: [
      'Стартап (до 50 сотрудников)',
      'Средняя компания (50-500)',
      'Крупная компания (500+)',
      'Не важно',
    ],
  },
  {
    id: 6,
    text: 'Готовы ли вы к переработкам ради интересного проекта?',
    options: ['Да, готов', 'Иногда', 'Редко', 'Нет, только в рабочее время'],
  },
  {
    id: 7,
    text: 'Что для вас важнее в работе?',
    options: ['Высокая зарплата', 'Интересные задачи', 'Стабильность', 'Развитие навыков'],
  },
  {
    id: 8,
    text: 'Как относитесь к обучению и курсам повышения квалификации?',
    options: ['Очень положительно', 'Положительно', 'Нейтрально', 'Негативно'],
  },
  {
    id: 9,
    text: 'Предпочитаете рутинную работу или постоянные изменения?',
    options: [
      'Рутинную работу',
      'Постоянные изменения',
      'Баланс между ними',
      'Зависит от настроения',
    ],
  },
  {
    id: 10,
    text: 'Важна ли для вас корпоративная культура компании?',
    options: ['Очень важна', 'Важна', 'Не очень важна', 'Не важна'],
  },
  {
    id: 11,
    text: 'Какой уровень ответственности вас привлекает?',
    options: ['Высокий уровень', 'Средний уровень', 'Низкий уровень', 'Постепенное увеличение'],
  },
  {
    id: 12,
    text: 'Готовы ли вы к частым командировкам?',
    options: ['Да, готов', 'Иногда', 'Редко', 'Нет'],
  },
  {
    id: 13,
    text: 'Как относитесь к работе с клиентами?',
    options: ['Очень нравится', 'Нравится', 'Нейтрально', 'Не нравится'],
  },
  {
    id: 14,
    text: 'Предпочитаете творческую или аналитическую работу?',
    options: ['Творческую', 'Аналитическую', 'Комбинированную', 'Зависит от проекта'],
  },
  {
    id: 15,
    text: 'Важны ли для вас дополнительные льготы (ДМС, спортзал и т.д.)?',
    options: ['Очень важны', 'Важны', 'Не очень важны', 'Не важны'],
  },
  {
    id: 16,
    text: 'Как относитесь к работе в стрессовых ситуациях?',
    options: ['Отлично справляюсь', 'Хорошо справляюсь', 'Справляюсь с трудом', 'Плохо справляюсь'],
  },
  {
    id: 17,
    text: 'Предпочитаете долгосрочные или краткосрочные проекты?',
    options: ['Долгосрочные', 'Краткосрочные', 'Комбинированные', 'Не важно'],
  },
  {
    id: 18,
    text: 'Готовы ли вы к руководящей должности?',
    options: ['Да, готов', 'Готов в будущем', 'Не готов', 'Не интересует'],
  },
  {
    id: 19,
    text: 'Как важна для вас возможность работать из дома?',
    options: ['Очень важна', 'Важна', 'Не очень важна', 'Не важна'],
  },
  {
    id: 20,
    text: 'Что мотивирует вас больше всего в работе?',
    options: [
      'Достижение целей',
      'Признание коллег',
      'Финансовое вознаграждение',
      'Личностный рост',
    ],
  },
];

const Questionnaire = () => {
  const [currentPart, setCurrentPart] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const getCurrentQuestions = () => {
    if (currentPart === 1) {
      return questions.slice(0, 10);
    } else {
      return questions.slice(10, 20);
    }
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPart(2);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPart(1);
      setIsAnimating(false);
    }, 300);
  };

  const handleSubmit = () => {
    console.log('Ответы на анкету:', answers);
    alert('Анкета успешно отправлена!');
  };

  const isPartComplete = () => {
    const currentQuestions = getCurrentQuestions();
    return currentQuestions.every((q) => answers[q.id]);
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Анкетирование для подбора вакансий
            </h1>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-gray-800 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-gray-600">
              Часть {currentPart} из 2 • Вопрос {getCurrentQuestions()[0]?.id}-
              {getCurrentQuestions()[getCurrentQuestions().length - 1]?.id} из {questions.length}
            </p>
          </div>

          <div
            className={`transition-all duration-300 ${
              isAnimating
                ? 'opacity-0 transform translate-x-4'
                : 'opacity-100 transform translate-x-0'
            }`}
          >
            <div className="space-y-8">
              {getCurrentQuestions().map((question, index) => (
                <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {question.id}. {question.text}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerSelect(question.id, option)}
                        className={`p-3 text-left border rounded-lg transition-all duration-200 ${
                          answers[question.id] === option
                            ? 'border-gray-700 bg-gray-100 text-gray-900 font-medium'
                            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            {currentPart === 1 ? (
              <div></div>
            ) : (
              <Button variant="secondary" onClick={handlePrevious} disabled={isAnimating}>
                Назад
              </Button>
            )}

            {currentPart === 1 ? (
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={!isPartComplete() || isAnimating}
                className="bg-gray-800 hover:bg-gray-900"
              >
                Далее
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!isPartComplete() || isAnimating}
                className="bg-gray-800 hover:bg-gray-900"
              >
                Завершить анкету
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
