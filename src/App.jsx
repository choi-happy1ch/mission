import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  BookOpen,
  Image as ImageIcon,
  Zap,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Upload,
  Link as LinkIcon
} from 'lucide-react';
import { seminarData } from './data/seminarData';

export default function App() {
  const [step, setStep] = useState('welcome');
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    if (step === 'welcome') setStep('registration');
    else if (step === 'registration') setStep('success');
  };

  return (
    <div className="container">
      <AnimatePresence mode="wait">
        {step === 'welcome' && <WelcomeView key="welcome" onNext={nextStep} />}
        {step === 'registration' && <RegistrationView key="registration" onNext={nextStep} />}
        {step === 'success' && <SuccessView key="success" onOpenBoard={() => setStep('board')} />}
        {step === 'board' && <BoardView key="board" onBack={() => setStep('success')} />}
      </AnimatePresence>
    </div>
  );
}

const WelcomeView = ({ onNext }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="glass-card"
  >
    <div className="section-label">2026 AI Pastoral Seminar</div>
    <h1 className="gradient-text" style={{ fontSize: '2.5rem' }}>AI 목회 활용 세미나</h1>
    <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
      인공지능을 통해 설교 준비부터 이미지 생성, 슬라이드 구성까지
      목회 사역의 효율을 극대화하는 방법을 제안합니다.
    </p>

    <div style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
      {seminarData.sessions.map((session) => (
        <div key={session.id} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
          <div style={{ background: 'rgba(139, 92, 246, 0.2)', padding: '0.5rem', borderRadius: '0.5rem' }}>
            {session.id === 1 && <Monitor size={20} color="#8b5cf6" />}
            {session.id === 2 && <ImageIcon size={20} color="#8b5cf6" />}
            {session.id === 3 && <BookOpen size={20} color="#8b5cf6" />}
            {session.id === 4 && <Zap size={20} color="#8b5cf6" />}
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{session.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{session.content}</p>
          </div>
        </div>
      ))}
    </div>

    <button className="btn btn-primary" onClick={onNext} style={{ width: '100%', justifyContent: 'center' }}>
      사전 등록 시작하기 <ArrowRight size={18} />
    </button>
  </motion.div>
);

const RegistrationView = ({ onNext }) => {
  const [answers, setAnswers] = useState({});

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="glass-card"
    >
      <div className="section-label">참가 신청 및 자기 진단</div>
      <h2>세미나 참여를 위한 기본 정보 📝</h2>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>1. 기본 인적 사항</h3>
        {seminarData.registrationFields.map((f) => (
          <div key={f.id} className="form-group">
            <label>{f.label} {f.required && '*'}</label>
            {f.type === 'select' ? (
              <select>
                {f.options.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            ) : (
              <input type={f.type} placeholder={f.placeholder} />
            )}
            {f.description && <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>{f.description}</p>}
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>2. 사전 진단 및 의견</h3>
        {seminarData.diagnosis.map((q) => (
          <div key={q.id} className="form-group">
            <label>{q.question}</label>
            {q.type === 'checkbox' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="checkbox" id={q.id} style={{ width: 'auto' }} />
                  <span style={{ fontSize: '0.9rem' }}>네, 정확히 알고 있습니다.</span>
                </div>
                {q.id === 'q1' && (
                  <div className="video-card" style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                    <ShieldCheck size={20} color="#ef4444" />
                    <div style={{ fontSize: '0.85rem' }}>
                      비밀번호를 모르시면 지금 <a href="https://accounts.google.com/signin/recovery" target="_blank" style={{ color: '#ef4444', fontWeight: '700' }}>여기에서 재설정</a>하세요.
                    </div>
                  </div>
                )}
              </div>
            ) : q.type === 'textarea' ? (
              <textarea rows="3" placeholder="내용을 입력해 주세요"></textarea>
            ) : (
              <select>
                {q.options?.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            )}
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>{q.description}</p>
          </div>
        ))}
      </div>

      <button className="btn btn-primary" onClick={onNext} style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
        참가 신청 완료 <CheckCircle size={18} />
      </button>
    </motion.div>
  );
};

const SuccessView = ({ onOpenBoard }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="glass-card"
    style={{ textAlign: 'center' }}
  >
    <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
      <CheckCircle size={40} color="#10b981" />
    </div>
    <h2>등록이 완료되었습니다!</h2>
    <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
      세미나 참석 전, 아래의 사전 교육 영상을 반드시 시청해 주세요.
    </p>

    <div style={{ display: 'grid', gap: '1rem', textAlign: 'left', marginBottom: '2rem' }}>
      {seminarData.preLearning.map((video, i) => (
        <a key={i} href={video.url} target="_blank" className="video-card">
          <Monitor size={24} color="red" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', fontSize: '1rem' }}>{video.title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{video.description}</div>
          </div>
          <ExternalLink size={18} />
        </a>
      ))}
    </div>

    <div style={{ display: 'flex', gap: '1rem' }}>
      <button className="btn btn-primary" onClick={onOpenBoard} style={{ flex: 1, justifyContent: 'center' }}>
        실시간 작업 보드 구경하기 <ImageIcon size={18} />
      </button>
    </div>
  </motion.div>
);

const BoardView = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card"
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h2>현장 실습 보드 🎨</h2>
      <button className="btn btn-secondary" onClick={onBack}>뒤로가기</button>
    </div>

    <div style={{ border: '2px dashed var(--border)', borderRadius: '1rem', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
      <Upload size={32} color="var(--text-dim)" style={{ marginBottom: '1rem' }} />
      <p style={{ color: 'var(--text-dim)' }}>
        세미나 실습 중에 만든 결과물을 여기에 공유해 보세요! <br />
        (이미지 업로드 또는 링크 붙여넣기)
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', justifyContent: 'center' }}>
        <button className="btn btn-primary" style={{ background: 'var(--secondary)' }}><ImageIcon size={18} /> 이미지 업로드</button>
        <button className="btn btn-secondary"><LinkIcon size={18} /> 결과물 링크 공유</button>
      </div>
    </div>

    <div className="board-grid">
      {/* Sample results */}
      {[1, 2, 3].map(i => (
        <div key={i} className="board-item">
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
            예시 결과물 #{i}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
