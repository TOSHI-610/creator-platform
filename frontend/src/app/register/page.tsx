'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // 仮の遅延（実際の実装では削除）
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (err) {
      setError('アカウント作成に失敗しました。もう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  // インラインスタイル
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #9F7AEA 0%, #6B46C1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    card: {
      width: '100%',
      maxWidth: '500px',
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    cardContent: {
      padding: '2rem'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#1a202c',
      textAlign: 'center',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: '1rem',
      color: '#4a5568',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    errorBox: {
      marginBottom: '1rem',
      padding: '0.75rem',
      backgroundColor: '#FEE2E2',
      borderRadius: '0.5rem',
      color: '#B91C1C',
      fontSize: '0.875rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#4a5568',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid #e2e8f0',
      fontSize: '1rem',
      transition: 'all 0.2s',
      outline: 'none'
    },
    helperText: {
      fontSize: '0.75rem',
      color: '#718096',
      marginTop: '0.25rem'
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1.5rem'
    },
    checkbox: {
      marginRight: '0.5rem',
      marginTop: '0.25rem'
    },
    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#4a5568'
    },
    button: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: '#805AD5',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonHover: {
      backgroundColor: '#6B46C1'
    },
    spinner: {
      animation: 'spin 1s linear infinite',
      marginRight: '0.5rem',
      height: '1.25rem',
      width: '1.25rem'
    },
    footer: {
      marginTop: '2rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#4a5568'
    },
    link: {
      color: '#805AD5',
      textDecoration: 'none',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container} className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <div style={styles.card} className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div style={styles.cardContent} className="p-8">
          <h1 style={styles.title} className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">アカウント作成</h1>
          <p style={styles.subtitle} className="text-gray-600 dark:text-gray-300 text-center mb-8">サブスクリプション管理を始めましょう</p>
          
          {error && (
            <div style={styles.errorBox} className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup} className="mb-5">
              <label style={styles.label} htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                お名前
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={styles.input}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="山田 太郎"
              />
            </div>
            
            <div style={styles.formGroup} className="mb-5">
              <label style={styles.label} htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div style={styles.formGroup} className="mb-5">
              <label style={styles.label} htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="••••••••"
                minLength={8}
              />
              <p style={styles.helperText} className="mt-1 text-xs text-gray-500">8文字以上の英数字を使用してください</p>
            </div>
            
            <div style={styles.formGroup} className="mb-5">
              <label style={styles.label} htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                パスワード（確認）
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={styles.input}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="••••••••"
              />
            </div>
            
            <div style={styles.checkboxContainer} className="flex items-start mb-6">
              <input
                id="terms"
                type="checkbox"
                required
                style={styles.checkbox}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
              />
              <label style={styles.checkboxLabel} htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                <span>
                  <Link href="/terms" style={styles.link} className="text-purple-600 hover:text-purple-500">利用規約</Link>
                  と
                  <Link href="/privacy" style={styles.link} className="text-purple-600 hover:text-purple-500">プライバシーポリシー</Link>
                  に同意します
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              style={{
                ...styles.button,
                ...(isLoading ? {} : styles.buttonHover)
              }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              {isLoading && (
                <svg style={styles.spinner} className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) }
              {isLoading ? '登録中...' : 'アカウント作成'}
            </button>
          </form>
          
          <div style={styles.footer} className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              すでにアカウントをお持ちの方は{' '}
              <Link href="/login" style={styles.link} className="font-medium text-purple-600 hover:text-purple-500">
                ログイン
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
