/* ═══════════════════════════════════════
   AUTH MODULE (Glassmorphism + Tailwind)
═══════════════════════════════════════ */
function showAuth(){
  document.getElementById('root').innerHTML=`
  <div class="w-full max-w-4xl mx-auto glass-pane overflow-hidden flex flex-col md:flex-row shadow-2xl fade-in m-4">
    
    <div class="hidden md:flex flex-col justify-center w-1/2 p-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-r border-white/20">
      <div class="text-5xl mb-6 drop-shadow-md">🔧</div>
      <h1 class="text-3xl font-bold text-slate-800 mb-2 tracking-tight">ระบบแจ้งซ่อม</h1>
      <p class="text-slate-600 mb-8 font-medium">iMaintain System<br>จัดการงานซ่อมบำรุงอย่างมีระบบและมีประสิทธิภาพ</p>
      
      <div class="space-y-4 text-sm text-slate-700 font-medium">
        <div class="flex items-center gap-4"><div class="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50 text-lg">📋</div> ติดตามสถานะงานซ่อมแบบ Real-time</div>
        <div class="flex items-center gap-4"><div class="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50 text-lg">👷</div> มอบหมายช่าง จัดลำดับความสำคัญ</div>
        <div class="flex items-center gap-4"><div class="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50 text-lg">📦</div> บริหารคลังวัสดุอุปกรณ์ (Low-stock)</div>
        <div class="flex items-center gap-4"><div class="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50 text-lg">📊</div> Dashboard วิเคราะห์ข้อมูลเชิงลึก</div>
      </div>
    </div>

    <div class="w-full md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center bg-white/30">
      
      <div class="text-center mb-8">
        <div class="md:hidden text-4xl mb-3 drop-shadow-md">🔧</div>
        <h2 id="auth-title" class="text-2xl font-bold text-slate-800 tracking-tight">เข้าสู่ระบบ</h2>
        <p class="text-slate-500 text-sm mt-1">ยินดีต้อนรับกลับสู่ iMaintain</p>
      </div>

      <div id="auth-alert" class="mb-4 empty:hidden"></div>

      <div id="f-login">
        <div class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">อีเมล</label>
            <input type="email" id="l-email" class="input-glass" placeholder="your@email.com" onkeydown="if(event.key==='Enter') doLogin()">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">รหัสผ่าน</label>
            <input type="password" id="l-pass" class="input-glass" placeholder="••••••••" onkeydown="if(event.key==='Enter') doLogin()">
          </div>
          <button onclick="doLogin()" class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-200/50 transition-all active:scale-[0.98] mt-2">
            เข้าสู่ระบบ
          </button>
        </div>
        <div class="mt-6 text-center text-sm text-slate-600">
          ยังไม่มีบัญชีใช่หรือไม่? <button onclick="switchAuth('register')" class="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">สร้างบัญชีใหม่</button>
        </div>
      </div>

      <div id="f-register" style="display:none;">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">ชื่อ - นามสกุล <span class="text-red-500">*</span></label>
            <input type="text" id="r-name" class="input-glass" placeholder="ระบุชื่อจริง">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">อีเมล <span class="text-red-500">*</span></label>
            <input type="email" id="r-email" class="input-glass" placeholder="ใช้สำหรับเข้าสู่ระบบ">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">รหัสผ่าน <span class="text-red-500">*</span></label>
            <input type="password" id="r-pass" class="input-glass" placeholder="อย่างน้อย 6 ตัวอักษร">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">รหัส นศ./พนักงาน</label>
              <input type="text" id="r-sid" class="input-glass" placeholder="(ถ้ามี)">
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">สาขา/แผนก</label>
              <input type="text" id="r-dept" class="input-glass" placeholder="(ถ้ามี)">
            </div>
          </div>
          <button onclick="doRegister()" class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-lg shadow-purple-200/50 transition-all active:scale-[0.98] mt-2">
            ลงทะเบียน
          </button>
        </div>
        <div class="mt-6 text-center text-sm text-slate-600">
          มีบัญชีอยู่แล้ว? <button onclick="switchAuth('login')" class="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">กลับไปเข้าสู่ระบบ</button>
        </div>
      </div>

    </div>
  </div>`;
}

// =========================================================
// สคริปต์การทำงาน (Logic) คงไว้เหมือนเดิมทุกประการ ห้ามแก้!
// =========================================================

function switchAuth(type){
  const l=document.getElementById('f-login'), r=document.getElementById('f-register'), t=document.getElementById('auth-title');
  if(type==='register'){ l.style.display='none'; r.style.display='block'; t.innerText='สร้างบัญชีใหม่'; }
  else { l.style.display='block'; r.style.display='none'; t.innerText='เข้าสู่ระบบ'; }
}

async function doLogin(){
  const email=document.getElementById('l-email').value.trim().toLowerCase();
  const pass=document.getElementById('l-pass').value;
  const alert=document.getElementById('auth-alert');
  if(!email||!pass) { alert.innerHTML=`<div class="p-3 mb-2 text-sm text-amber-800 bg-amber-100 rounded-lg border border-amber-200">⚠️ กรุณากรอกอีเมลและรหัสผ่าน</div>`; return; }
  
  try {
    alert.innerHTML=`<div class="p-3 mb-2 text-sm text-blue-800 bg-blue-100 rounded-lg border border-blue-200">⏳ กำลังเข้าสู่ระบบ...</div>`;
    const data = await apiFetch('/auth/login', { method:'POST', body:JSON.stringify({email,password:pass}) });
    localStorage.setItem('APP_TOKEN', data.token);
    APP.user = data.user;
    saveApp();
    window.location.href = `${data.user.role}.html`;
  } catch(e) {
    alert.innerHTML=`<div class="p-3 mb-2 text-sm text-red-800 bg-red-100 rounded-lg border border-red-200">❌ ${e.message}</div>`;
  }
}

async function doRegister(){
  const name=document.getElementById('r-name').value.trim();
  const email=document.getElementById('r-email').value.trim().toLowerCase();
  const pass=document.getElementById('r-pass').value;
  const el=document.getElementById('auth-alert');
  if(!name||!email||!pass){el.innerHTML=`<div class="p-3 mb-2 text-sm text-amber-800 bg-amber-100 rounded-lg border border-amber-200">⚠️ กรุณากรอกข้อมูลที่จำเป็น</div>`;return;}
  if(pass.length<6){el.innerHTML=`<div class="p-3 mb-2 text-sm text-amber-800 bg-amber-100 rounded-lg border border-amber-200">⚠️ รหัสผ่านต้องมีอย่างน้อย 6 ตัว</div>`;return;}
  
  try {
    el.innerHTML=`<div class="p-3 mb-2 text-sm text-blue-800 bg-blue-100 rounded-lg border border-blue-200">⏳ กำลังสร้างบัญชี...</div>`;
    const res = await apiFetch('/auth/register', { method:'POST', body:JSON.stringify({
      name, email, password:pass, student_id:document.getElementById('r-sid').value||null, department:document.getElementById('r-dept').value||null
    })});
    el.innerHTML=`<div class="p-3 mb-2 text-sm text-green-800 bg-green-100 rounded-lg border border-green-200">✅ ${res.message}</div>`;
    setTimeout(()=>switchAuth('login'), 2000);
  } catch(e){
    el.innerHTML=`<div class="p-3 mb-2 text-sm text-red-800 bg-red-100 rounded-lg border border-red-200">❌ ${e.message}</div>`;
  }
}