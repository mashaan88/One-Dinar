/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Truck, ShieldCheck, Banknote, Star, ArrowLeft } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "جهاز Auto Clicker",
    description: "جهاز ذكي يوفر الوقت ويعمل تلقائياً بسهولة، مثالي لتيك توك والألعاب.",
    price: "عرض خاص",
    image: "input_file_0.png",
  },
  {
    id: 2,
    name: "سلك شحن USB-C سريع",
    description: "سلك قوي – شحن سريع – يدوم طويلاً وبجودة عالية جداً.",
    price: "سعر مميز",
    image: "input_file_3.png",
  },
  {
    id: 3,
    name: "أقلام فاخرة",
    description: "قلم فاخر بتصميم أنيق مناسب للهدايا والمناسبات الرسمية.",
    price: "أناقة لا تقاوم",
    image: "input_file_5.png",
  },
  {
    id: 4,
    name: "طقم أكواب فخار",
    description: "أكواب فخار أنيقة للصناعة اليدوية، لعشاق القهوة المختصة.",
    price: "تصميم فريد",
    image: "input_file_4.png",
  },
  {
    id: 5,
    name: "ساعة ذكية عصرية",
    description: "ساعة أنيقة بتصميم عصري ومواصفات تقنية متقدمة للارتداء اليومي.",
    price: "فخامة عملية",
    image: "input_file_12.png",
  }
];

const WHATSAPP_NUMBER = "96599902468";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const getWhatsAppUrl = (productName?: string) => {
    const text = productName 
      ? encodeURIComponent(`مرحبا، حابب أطلب منتج: ${productName}`)
      : encodeURIComponent(`مرحبا، حابب أطلب واستفسر عن المنتجات`);
    return `${WHATSAPP_BASE_URL}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-primary-accent" dir="rtl">
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex justify-between items-center sm:px-8">
        <div className="text-2xl font-bold text-primary tracking-tight">ONE DINAR</div>
        <a 
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-sm active:scale-95 cursor-pointer"
        >
          <MessageCircle size={18} />
          <span className="text-sm sm:text-base">تواصل معنا</span>
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 px-4 sm:pt-20 sm:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/30 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-accent/30 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
          
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-[1.1] text-gray-900 tracking-tight">
              كل اللي تحتاجه <br />
              <span className="text-primary-light">في مكان واحد 🔥</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              منتجات مختارة بعناية + جودة عالية + توصيل سريع داخل الكويت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-xl font-bold rounded-2xl shadow-xl shadow-primary-accent hover:bg-primary-dark hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
              >
                اطلب الآن عبر واتساب
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: <Truck className="text-primary" size={32} />, title: "توصيل سريع 🚚", text: "خلال 24-48 ساعة لجميع مناطق الكويت" },
              { icon: <ShieldCheck className="text-primary" size={32} />, title: "جودة مضمونة ✅", text: "نفتخر باختيار أفضل المنتجات الأصلية" },
              { icon: <Banknote className="text-primary" size={32} />, title: "دفع عند الاستلام 💰", text: "تسوق بكل راحة وأمان بدون بطاقة بنكية" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-4 bg-primary-accent/20 p-4 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">أفضل المختارات لكم بالحب ❤️</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-primary-dark font-bold shadow-sm text-sm border border-primary-accent">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow text-center">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm flex-grow">
                    {product.description}
                  </p>
                  
                  <a 
                    href={getWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    اطلب الآن
                    <ArrowLeft size={18} className="rotate-180" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Offer Section */}
        <section className="px-4 py-12">
          <motion.div 
            className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-[3rem] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10">
              <span className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold mb-6 tracking-wide">🔥 عرض لفترة محدودة</span>
              <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-tight">
                احصل على أفضل المنتجات <br /> بأسعار مميزة
              </h2>
              <p className="text-primary-accent text-xl mb-12 max-w-xl mx-auto">
                وفر وقتك وجهدك واطلب كل احتياجاتك من مكان واحد بكل سهولة وسرعة.
              </p>
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-primary px-12 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-gray-900/10 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 mx-auto cursor-pointer"
              >
                اضغط هنا واطلب مباشرة
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Reviews Section (Contextual Fill) */}
        <section className="py-24 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
             <div className="flex flex-col items-center mb-16">
               <div className="flex gap-1 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#0ea5e9" className="text-primary" />)}
               </div>
               <h2 className="text-3xl font-bold">بذوق كويتي، وبثقة عالمية</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { text: "الخدمة سريعة والتوصيل وصلني في أقل من 24 ساعة. المنتجات بجودة عالية جداً.", name: "فهد مرزوق" },
                  { text: "أعجبني طقم الأكواب، شكله فخم وتغليفه ممتاز. التعامل كان سريع جداً بالواتساب.", name: "منيرة عبدالله" },
                  { text: "شكراً جزيلاً! ساعة جميلة جداً وجودتها فاقت توقعاتي. الدفع عند الاستلام مريح.", name: "محمد العجمي" }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                    <p className="font-bold text-primary">{review.name}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-16 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-primary mb-4">ONE DINAR</div>
          <p className="text-gray-500 mb-8 max-w-sm">
            نحن هنا لخدمتك. متوفر التوصيل لجميع مناطق الكويت مع خيارات دفع آمنة وسهلة.
          </p>
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400">
            <p>© 2026 جميع الحقوق محفوظة لـ ONE DINAR</p>
            <div className="flex gap-6">
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
              >
                تواصل واتساب مباشر
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <a 
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white p-4 rounded-full shadow-2xl animate-bounce hover:bg-primary-dark flex items-center justify-center cursor-pointer"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
