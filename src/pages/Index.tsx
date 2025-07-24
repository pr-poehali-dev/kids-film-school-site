import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      title: "Актерское мастерство",
      description: "Развиваем уверенность перед камерой и навыки актерской игры",
      icon: "Users",
      duration: "3 месяца",
      age: "13-17 лет"
    },
    {
      title: "Режиссура",
      description: "Учимся создавать собственные фильмы от идеи до монтажа", 
      icon: "Video",
      duration: "4 месяца",
      age: "14-17 лет"
    },
    {
      title: "Операторская работа",
      description: "Осваиваем искусство кинематографии и работу с камерой",
      icon: "Camera",
      duration: "3 месяца", 
      age: "13-17 лет"
    },
    {
      title: "Сценарное мастерство",
      description: "Превращаем идеи в захватывающие киносценарии",
      icon: "PenTool",
      duration: "2 месяца",
      age: "13-17 лет"
    }
  ];

  const teachers = [
    {
      name: "Анна Петрова",
      specialty: "Актерское мастерство",
      experience: "15 лет в театре и кино"
    },
    {
      name: "Михаил Сергеев", 
      specialty: "Режиссура",
      experience: "Автор 12 короткометражек"
    },
    {
      name: "Елена Козлова",
      specialty: "Операторская работа", 
      experience: "10 лет в кинопроизводстве"
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "16:00-18:00", course: "Актерское мастерство" },
    { day: "Среда", time: "17:00-19:00", course: "Режиссура" },
    { day: "Пятница", time: "16:00-18:00", course: "Операторская работа" },
    { day: "Суббота", time: "10:00-12:00", course: "Сценарное мастерство" }
  ];

  return (
    <div className="min-h-screen bg-film-black text-film-cream font-sans">
      {/* Header */}
      <header className="border-b border-film-gold/20 bg-film-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-film-gold rounded-full flex items-center justify-center">
                <Icon name="Video" size={24} className="text-film-black" />
              </div>
              <div>
                <h1 className="font-bebas text-2xl text-film-gold tracking-wider">МАРК</h1>
                <p className="text-sm text-film-cream/70">Малая Академия Ребячьего Кино</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-film-cream hover:text-film-gold transition-colors">Курсы</a>
              <a href="#teachers" className="text-film-cream hover:text-film-gold transition-colors">Преподаватели</a>
              <a href="#portfolio" className="text-film-cream hover:text-film-gold transition-colors">Портфолио</a>
              <a href="#schedule" className="text-film-cream hover:text-film-gold transition-colors">Расписание</a>
              <a href="#contacts" className="text-film-cream hover:text-film-gold transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-film-black via-film-gray/50 to-film-black"></div>
        
        {/* Film strip decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-film-gold to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-film-gold to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-bebas text-6xl md:text-8xl text-film-gold mb-6 tracking-wide">
              КИНО МАСТЕРСКАЯ
            </h1>
            <div className="w-24 h-1 bg-film-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-film-cream mb-8 leading-relaxed">
              Дорогой друг! Тебе уже 13, и ты мечтаешь о большом экране?<br />
              Добро пожаловать в КиноМастерскую «МАРК»!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-film-gray/30 backdrop-blur-sm p-6 rounded-lg border border-film-gold/20">
                <Icon name="Drama" size={32} className="text-film-gold mx-auto mb-3" />
                <p className="text-film-cream">Актерское мастерство</p>
              </div>
              <div className="bg-film-gray/30 backdrop-blur-sm p-6 rounded-lg border border-film-gold/20">
                <Icon name="Video" size={32} className="text-film-gold mx-auto mb-3" />
                <p className="text-film-cream">Режиссура</p>
              </div>
              <div className="bg-film-gray/30 backdrop-blur-sm p-6 rounded-lg border border-film-gold/20">
                <Icon name="Camera" size={32} className="text-film-gold mx-auto mb-3" />
                <p className="text-film-cream">Операторская работа</p>
              </div>
              <div className="bg-film-gray/30 backdrop-blur-sm p-6 rounded-lg border border-film-gold/20">
                <Icon name="PenTool" size={32} className="text-film-gold mx-auto mb-3" />
                <p className="text-film-cream">Сценарии</p>
              </div>
            </div>
            
            <Button className="bg-film-gold text-film-black hover:bg-film-gold/90 text-lg px-8 py-3 font-semibold">
              Записаться на курс
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-film-gray/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl text-film-gold mb-4 tracking-wide">НАШИ КУРСЫ</h2>
            <div className="w-16 h-1 bg-film-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-film-gray/20 border-film-gold/20 hover:border-film-gold/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-film-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={course.icon} size={32} className="text-film-gold" />
                  </div>
                  <CardTitle className="text-film-gold font-bebas text-xl tracking-wide">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-film-cream/80 mb-4">
                    {course.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-film-gold/40 text-film-gold">
                      {course.duration}
                    </Badge>
                    <Badge variant="outline" className="border-film-gold/40 text-film-gold">
                      {course.age}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl text-film-gold mb-4 tracking-wide">ПРЕПОДАВАТЕЛИ</h2>
            <div className="w-16 h-1 bg-film-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-film-gray/20 border-film-gold/20 text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-film-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-film-gold" />
                  </div>
                  <CardTitle className="text-film-gold font-bebas text-xl tracking-wide">{teacher.name}</CardTitle>
                  <CardDescription className="text-film-gold/80 font-semibold">{teacher.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-film-cream/80">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-film-gray/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl text-film-gold mb-4 tracking-wide">ПОРТФОЛИО</h2>
            <div className="w-16 h-1 bg-film-gold mx-auto mb-4"></div>
            <p className="text-film-cream/80">Работы наших талантливых учеников</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-film-gray/20 border-film-gold/20 overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-film-gray/40 flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-film-gold" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bebas text-xl text-film-gold mb-2 tracking-wide">КОРОТКОМЕТРАЖКА #{item}</h3>
                  <p className="text-film-cream/80 text-sm">Дебютная работа наших учеников, снятая в рамках итогового проекта курса режиссуры.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl text-film-gold mb-4 tracking-wide">РАСПИСАНИЕ</h2>
            <div className="w-16 h-1 bg-film-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <Card key={index} className="bg-film-gray/20 border-film-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-film-gold text-film-black font-semibold">{item.day}</Badge>
                        <span className="text-film-gold font-semibold">{item.time}</span>
                      </div>
                      <span className="text-film-cream">{item.course}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-film-gray/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl text-film-gold mb-4 tracking-wide">КОНТАКТЫ</h2>
            <div className="w-16 h-1 bg-film-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-film-gray/20 border-film-gold/20">
              <CardContent className="p-8">
                <h3 className="font-bebas text-2xl text-film-gold mb-6 tracking-wide">СВЯЖИТЕСЬ С НАМИ</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" className="text-film-gold" />
                    <span className="text-film-cream">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" className="text-film-gold" />
                    <span className="text-film-cream">info@mark-cinema.ru</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" className="text-film-gold" />
                    <span className="text-film-cream">г. Москва, ул. Кинематографистов, 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-film-gray/20 border-film-gold/20">
              <CardContent className="p-8">
                <h3 className="font-bebas text-2xl text-film-gold mb-6 tracking-wide">ВРЕМЯ РАБОТЫ</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-film-cream/80">Понедельник - Пятница</span>
                    <span className="text-film-gold">15:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-film-cream/80">Суббота</span>
                    <span className="text-film-gold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-film-cream/80">Воскресенье</span>
                    <span className="text-film-gold">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-film-gold/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-film-gold rounded-full flex items-center justify-center">
                <Icon name="Video" size={20} className="text-film-black" />
              </div>
              <div>
                <p className="font-bebas text-film-gold tracking-wider">МАРК</p>
                <p className="text-xs text-film-cream/70">Малая Академия Ребячьего Кино</p>
              </div>
            </div>
            <p className="text-film-cream/60 text-sm">© 2024 КиноМастерская МАРК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;