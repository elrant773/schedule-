const data = [
  {
    name: 'Алым',
    color: '#22d3ee',
    schedule: {
      'Понедельник': [
        { time: '09.00-09.45', title: 'Математика' },
        { time: '09.50-10.35', title: 'Математика' },
        { time: '10.40-11.25', title: 'Математика' },
        { time: '11.30-12.15', title: 'Перерыв' },
        { time: '12.20-13.05', title: 'Англ яз' },
        { time: '13.10-13.55', title: 'Физика' },
        { time: '14.00-14.45', title: 'Физика' },
        { time: '14.50-15.35', title: 'Основы компьютерной грамотности' },
        { time: '15.40-16.25', title: 'Основы компьютерной грамотности' },
        { time: '16:30-17:15', title: 'Основы компьютерной грамотности' },
      ],
      'Вторник': [
        { time: '09.00-09.45', title: 'Человек и общество' },
        { time: '09.50-10.35', title: 'История' },
        { time: '10.40-11.25', title: 'История' },
        { time: '11.30-12.15', title: 'Перерыв' },
        { time: '13.10-13.55', title: 'Физика' },
        { time: '12.20-13.05', title: 'Проф Англ яз' },
        { time: '14.00-14.45', title: 'Русский язык' },
        { time: '14.50-15.35', title: 'Русская литература' },
        { time: '15.40-16.25', title: 'Русский язык' },
        { time: '16:30-17:15', title: '' },

      ],
      'Среда': [
        { time: '09.00-09.45', title: 'Математика' },
        { time: '09.50-10.35', title: 'Математика' },
        { time: '10.40-11.25', title: 'Математика' },
        { time: '11.30-12.15', title: 'Физ-ра' },
        { time: '12.20-13.05', title: 'Физ-ра' },
        { time: '13.10-13.55', title: 'Перерыв' },
        { time: '14.00-14.45', title: 'Проф Англ яз' },
        { time: '14.50-15.35', title: 'География' },
        { time: '15.40-16.25', title: 'География' },
        { time: '16:30-17:15', title: 'География' },

      ],
      'Четверг': [
        { time: '09.00-09.45', title: 'Химия' },
        { time: '09.50-10.35', title: 'Химия' },
        { time: '10.40-11.25', title: 'Перерыв' },
        { time: '11.30-12.15', title: 'Допризывная подготовкат' },
        { time: '12.20-13.05', title: 'Допризывная подготовкат' },
        { time: '13.10-13.55', title: 'Английский язык ' },
        { time: '14.00-14.45', title: 'Английский язык ' },
        { time: '14.50-15.35', title: 'Английский язык ' },
        { time: '15.40-16.25', title: 'Кыргызский язык ' },
        { time: '16:30-17:15', title: 'Кыргызский язык ' },

      ],
      'Пятница': [
        { time: '09.00-09.45', title: 'Биология ' },
        { time: '09.50-10.35', title: 'Биология ' },
        { time: '10.40-11.25', title: 'Проф Англ яз' },
        { time: '11.30-12.15', title: 'Перерыв' },
        { time: '12.20-13.05', title: 'Англ яз' },
        { time: '13.10-13.55', title: 'Англ яз' },
        { time: '14.00-14.45', title: 'Кыргызский язык' },
        { time: '14.50-15.35', title: 'Кыргызский язык' },
        { time: '15.40-16.25', title: 'Кыргыз адабияты' },
        { time: '16:30-17:15', title: 'Кыргыз адабияты' },

      ],
      'Суббота': [
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },      ],
      'Воскресенье': []
    }
  },
  {
    name: 'Алия',
    color: '#34d399',
    schedule: {
      'Понедельник': [
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
      ],
      'Вторник': [
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
      ],
      'Среда': [
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
      ],
      'Четверг': [
        { time: '', title: '' },
        { time: '', title: '' }, 
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
      ],
      'Пятница': [
        { time: '', title: '' },
        { time: '', title: '' }, 
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },

      ],
      'Суббота': [
        { time: '', title: '' },
        { time: '', title: '' }, 
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },

      ],
      'Воскресенье': []
    }
  },
  {
    name: 'Салим',
    color: '#a78bfa',
    schedule: {
      'Понедельник': [
        { time: '09:00-09:35', title: 'Естествознания' },
        { time: '09:45-10:20', title: 'Англ яз' }, 
        { time: '10:30-11:05(15мин перемена)', title: 'Физ-ра' },
        { time: '11:20-11:55', title: 'Математика' },
        { time: '12:05-12:40(20мин перемена)', title: 'Арт. Тер' },
        { time: '13:00-13:55(20мин перемена)', title: '' },
        { time: '13:55-14:30', title: '' },


      ],
      'Вторник': [
        { time: '09:00-09:35', title: 'Математика' },
        { time: '09:45-10:20', title: 'Естествознания' }, 
        { time: '10:30-11:05(15мин перемена)', title: 'Лит. Чит' },
        { time: '11:20-11:55', title: 'Чтение' },
        { time: '12:05-12:40(20мин перемена)', title: 'Timing' },
        { time: '13:00-13:55(20мин перемена)', title: 'ИХТ' },
        { time: '13:55-14:30', title: '' }
      ],
      'Среда': [
        { time: '09:00-09:35', title: 'Русский язык' },
        { time: '09:45-10:20', title: 'физ-ра' }, 
        { time: '10:30-11:05(15мин перемена)', title: 'Кырг. Яз' },
        { time: '11:20-11:55', title: 'Математика ' },
        { time: '12:05-12:40(20мин перемена)', title: 'Англ. Яз' },
        { time: '13:00-13:55(20мин перемена)', title: 'Tall. Club' },
        { time: '13:55-14:30', title: '' }
      ],
      'Четверг': [
        { time: '09:00-09:35', title: 'Кырг. Яз' },
        { time: '09:45-10:20', title: 'Англ. Яз' }, 
        { time: '10:30-11:05(15мин перемена)', title: 'Русс. Яз' },
        { time: '11:20-11:55', title: 'Чтение' },
        { time: '12:05-12:40(20мин перемена)', title: 'Математика ' },
        { time: '13:00-13:55(20мин перемена)', title: '' },
        { time: '13:55-14:30', title: '' }

      ],
      'Пятница': [
        { time: '09:00-09:35', title: 'Музыка ' },
        { time: '09:45-10:20', title: 'Естествознания' }, 
        { time: '10:30-11:05(15мин перемена)', title: 'Математика' },
        { time: '11:20-11:55', title: 'Русс. Яз' },
        { time: '12:05-12:40(20мин перемена)', title: 'Англ.Яз' },
        { time: '13:00-13:55(20мин перемена)', title: '' },
        { time: '13:55-14:30', title: '' }
      ],
      'Суббота': [        
        { time: '', title: '' },
        { time: '', title: '' }, 
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
        { time: '', title: '' },
],
      'Воскресенье': [
      ]
    }
  }
];

const days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const grid = document.getElementById('grid');
const tabs = document.getElementById('tabs');
const personName = document.getElementById('personName');
const colorDot = document.getElementById('colorDot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const todayBtn = document.getElementById('todayBtn');
let currentIndex = 0;

function renderTabs(){
  tabs.innerHTML='';
  data.forEach((p, i)=>{
    const b = document.createElement('button');
    b.className = 'tab' + (i===currentIndex ? ' active' : '');
    b.textContent = p.name;
    b.addEventListener('click', ()=>{ currentIndex = i; render(); saveIndex(); });
    tabs.appendChild(b);
  });
}

function renderGrid(){
  const person = data[currentIndex];
  personName.textContent = person.name;
  colorDot.style.background = person.color;

  grid.innerHTML = '';
  for (const day of days){
    const col = document.createElement('div');
    col.className = 'day';
    const h = document.createElement('h3');
    h.textContent = day;
    col.appendChild(h);

    const items = person.schedule[day] || [];
    if(items.length === 0){
      const empty = document.createElement('div');
      empty.className = 'empty';
      empty.textContent = 'Нет занятий';
      col.appendChild(empty);
    }else{
      for(const it of items){
        const card = document.createElement('div');
        card.className = 'item';
        const t = document.createElement('div');
        t.className = 'time';
        t.textContent = it.time;
        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = it.title;
        card.appendChild(t);
        card.appendChild(title);
        col.appendChild(card);
      }
    }
    grid.appendChild(col);
  }
}

function render(){
  renderTabs();
  renderGrid();
}

function next(){ currentIndex = (currentIndex+1) % data.length; render(); saveIndex(); }
function prev(){ currentIndex = (currentIndex-1+data.length) % data.length; render(); saveIndex(); }

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
window.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowRight') next();
  if(e.key === 'ArrowLeft') prev();
});

todayBtn.addEventListener('click', ()=>{
  const now = new Date();
  let d = now.getDay();
  const map = {1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',0:'Воскресенье'};
  const todayName = map[d];
  const dayCards = [...document.querySelectorAll('.day')];
  const idx = days.indexOf(todayName);
  dayCards[idx]?.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
  const target = dayCards[idx];
  if(target){
    const old = target.style.boxShadow;
    target.style.boxShadow = '0 0 0 3px ' + (data[currentIndex].color || 'var(--accent)');
    setTimeout(()=> target.style.boxShadow = old, 1500);
  }
});

function saveIndex(){
  try{ localStorage.setItem('schedulePersonIndex', String(currentIndex)); }catch(e){}
}
function restoreIndex(){
  try{
    const v = localStorage.getItem('schedulePersonIndex');
    if(v!==null){ currentIndex = Math.min(Math.max(parseInt(v,10)||0,0), data.length-1); }
  }catch(e){}
}
restoreIndex();
render();
