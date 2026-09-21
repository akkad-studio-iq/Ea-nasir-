// src/data/customers.js

export const customers = [
  {
    id: 'nanni',
    name: 'نني',
    title: 'تاجر من أور',
    line: 'النحاس الذي أرسلته رديء. سبائك مكسورة. ورسولك أهانني أمام الناس.',
    choices: [
      {
        text: 'اعتذر: "خطأ من العمال، أعوّضك"',
        effects: { reputation: +5, wealth: -20, stress: +5 },
      },
      {
        text: 'واجه: "أنت اخترت البضاعة بنفسك"',
        effects: { reputation: -10, wealth: 0, stress: +15 },
      },
      {
        text: 'اكذب: "الرسول بدّل السبائك في الطريق"',
        effects: { reputation: -5, wealth: +10, stress: +10 },
      },
    ],
  },

  {
    id: 'ili_awil',
    name: 'إلي-أويل',
    title: 'كاهن معبد الشمس',
    line: 'النحاس الذي وعدت به المعبد لم يصل. الكهنة يسألون، وأنا لا أحب الأسئلة.',
    choices: [
      {
        text: 'اعتذر: "غداً يصلك، أُقسم بمردوخ"',
        effects: { reputation: +8, wealth: -15, stress: +5 },
      },
      {
        text: 'واجه: "المعبد لا يدفع كفاية"',
        effects: { reputation: -20, wealth: +5, stress: +10 },
      },
      {
        text: 'اكذب: "أرسلته، لعل القافلة تأخرت"',
        effects: { reputation: -5, wealth: 0, stress: +20 },
      },
    ],
  },

  {
    id: 'shamash_nasir',
    name: 'شمش-ناصر',
    title: 'تاجر منافس',
    line: 'سمعت أن بضاعتك رديئة. أنا فقط... أتحقق. لأجل السوق، طبعاً.',
    choices: [
      {
        text: 'اعتذر: "السوق فيه غشّ، وأنا ضحيته"',
        effects: { reputation: 0, wealth: -10, stress: +10 },
      },
      {
        text: 'واجه: "ابتعد عن طريقي يا ابن..."',
        effects: { reputation: -15, wealth: 0, stress: +25 },
      },
      {
        text: 'اكذب: "بضاعتي أفضل من بضاعتك، وسأثبت ذلك"',
        effects: { reputation: -5, wealth: +5, stress: +10 },
      },
    ],
  },
]

// دالة مساعدة: تعطينا عميل عشوائي غير اللي قبل
export const pickRandomCustomer = (excludeId = null) => {
  const pool = customers.filter(c => c.id !== excludeId)
  return pool[Math.floor(Math.random() * pool.length)]
}