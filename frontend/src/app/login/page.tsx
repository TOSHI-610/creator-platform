export const dynamic = 'force-dynamic';
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // 仮の遅延（実際の実装では削除）
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (err) {
      setError('ログインに失敗しました。メールアドレスとパスワードを確認してください。');
    } finally {
      setIsLoading(false);
    }
  };

  // インラインスタイル（Tailwindが機能しない場合のフォールバック）
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
      } as CSSProperties,

    card: {
      width: '100%',
      maxWidth: '450px',
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
      } as CSSProperties,

    cardContent: {
      padding: '2rem'
    } as CSSProperties,

    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#1a202c',
      textAlign: 'center',
      marginBottom: '0.5rem'
    } as CSSProperties,

    subtitle: {
      fontSize: '1rem',
      color: '#4a5568',
      textAlign: 'center',
      marginBottom: '2rem'
    } as CSSProperties,

    errorBox: {
      marginBottom: '1rem',
      padding: '0.75rem',
      backgroundColor: '#FEE2E2',
      borderRadius: '0.5rem',
      color: '#B91C1C',
      fontSize: '0.875rem'
    } as CSSProperties,

    formGroup: {
      marginBottom: '1.5rem'
      } as CSSProperties,

    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#4a5568',
      marginBottom: '0.5rem'
      } as CSSProperties,

    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid #e2e8f0',
      fontSize: '1rem',
      transition: 'all 0.2s',
      outline: 'none'
      } as CSSProperties,

    forgotPassword: {
      fontSize: '0.875rem',
      color: '#3B82F6',
      textDecoration: 'none',
      marginLeft: 'auto',
      display: 'block',
      textAlign: 'right',
      marginTop: '-1.5rem',
      marginBottom: '1rem'
      } as CSSProperties,

    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem'
      } as CSSProperties,

    checkbox: {
      marginRight: '0.5rem'
      } as CSSProperties,

    checkboxLabel: {
      fontSize: '0.875rem',
      color: '#4a5568'
      } as CSSProperties,

    button: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: '#4F46E5',
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
      } as CSSProperties,

    buttonHover: {
      backgroundColor: '#4338CA'
      } as CSSProperties,

    spinner: {
      animation: 'spin 1s linear infinite',
      marginRight: '0.5rem',
      height: '1.25rem',
      width: '1.25rem'
      } as CSSProperties,

    footer: {
      marginTop: '2rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#4a5568'
      } as CSSProperties,

    link: {
      color: '#4F46E5',
      textDecoration: 'none',
      fontWeight: '500'
      } as CSSProperties,
    }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">ログイン</h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">アカウントにアクセスして、サブスクリプションを管理しましょう</p>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
            
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 block text-right mb-4">
              パスワードをお忘れですか？
            </Link>
            
            <div className="flex items-center mb-6">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                ログイン状態を保持する
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              style={{
                ...styles.button,
                ...(isLoading ? {} : styles.buttonHover)
              }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {isLoading && (
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) }
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              アカウントをお持ちでない方は{' '}
              <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                新規登録
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
