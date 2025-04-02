'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ページ読み込み完了時のローディングアニメーション
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>サブスクリプション管理アプリ</title>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          
          body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
          }
          
          /* ローディングアニメーション */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            transition: opacity 0.5s ease-out;
          }
          
          .loading-overlay.fade-out {
            opacity: 0;
            pointer-events: none;
          }
          
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* ヘッダースタイル */
          .header {
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }
          
          .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #4F46E5;
            text-decoration: none;
          }
          
          .nav-links {
            display: flex;
            gap: 2rem;
          }
          
          .nav-link {
            color: #4B5563;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
          }
          
          .nav-link:hover {
            color: #4F46E5;
          }
          
          .auth-buttons {
            display: flex;
            gap: 1rem;
          }
          
          .login-button {
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            font-weight: 500;
            color: #4F46E5;
            background-color: white;
            border: 1px solid #4F46E5;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
          }
          
          .login-button:hover {
            background-color: #F9FAFB;
          }
          
          .signup-button {
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            font-weight: 500;
            color: white;
            background: linear-gradient(to right, #4F46E5, #7C3AED);
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
          }
          
          .signup-button:hover {
            background: linear-gradient(to right, #4338CA, #6D28D9);
          }
          
          /* ハンバーガーメニュー（モバイル用） */
          .menu-button {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #4B5563;
          }
          
          /* ヒーローセクション */
          .hero {
            padding-top: 6rem;
            padding-bottom: 5rem;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
            text-align: center;
          }
          
          .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            color: #1F2937;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            color: #4B5563;
            margin-bottom: 2.5rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 3rem;
          }
          
          .hero-primary-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            font-size: 1rem;
            color: white;
            background: linear-gradient(to right, #4F46E5, #7C3AED);
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
          }
          
          .hero-primary-button:hover {
            background: linear-gradient(to right, #4338CA, #6D28D9);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .hero-secondary-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            font-size: 1rem;
            color: #4B5563;
            background-color: white;
            border: 1px solid #D1D5DB;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
          }
          
          .hero-secondary-button:hover {
            background-color: #F9FAFB;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .hero-image {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          /* 特徴セクション */
          .features {
            padding: 5rem 0;
            background-color: white;
          }
          
          .features-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .section-title {
            font-size: 2rem;
            font-weight: 700;
            color: #1F2937;
            text-align: center;
            margin-bottom: 1rem;
          }
          
          .section-subtitle {
            font-size: 1.125rem;
            color: #4B5563;
            text-align: center;
            margin-bottom: 3rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
          }
          
          .feature-card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          
          .feature-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
          }
          
          .feature-icon-1 {
            background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
            color: white;
          }
          
          .feature-icon-2 {
            background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
            color: white;
          }
          
          .feature-icon-3 {
            background: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%);
            color: white;
          }
          
          .feature-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 0.75rem;
          }
          
          .feature-description {
            color: #4B5563;
            line-height: 1.6;
          }
          
          /* 料金プランセクション */
          .pricing {
            padding: 5rem 0;
            background-color: #F9FAFB;
          }
          
          .pricing-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .pricing-card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          
          .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          
          .pricing-card-popular {
            border: 2px solid #4F46E5;
            position: relative;
          }
          
          .popular-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(to right, #4F46E5, #7C3AED);
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            padding: 0.25rem 1rem;
            border-radius: 9999px;
          }
          
          .pricing-name {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 0.5rem;
          }
          
          .pricing-price {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1F2937;
            margin-bottom: 1.5rem;
          }
          
          .pricing-price span {
            font-size: 1rem;
            font-weight: 400;
            color: #6B7280;
          }
          
          .pricing-description {
            color: #4B5563;
            margin-bottom: 1.5rem;
          }
          
          .pricing-features {
            list-style-type: none;
            margin-bottom: 2rem;
            flex-grow: 1;
          }
          
          .pricing-feature {
            display: flex;
            align-items: center;
            margin-bottom: 0.75rem;
            color: #4B5563;
          }
          
          .pricing-feature svg {
            color: #10B981;
            margin-right: 0.5rem;
            flex-shrink: 0;
          }
          
          .pricing-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            font-size: 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
          }
          
          .pricing-button-primary {
            color: white;
            background: linear-gradient(to right, #4F46E5, #7C3AED);
            border: none;
          }
          
          .pricing-button-primary:hover {
            background: linear-gradient(to right, #4338CA, #6D28D9);
          }
          
          .pricing-button-secondary {
            color: #4F46E5;
            background-color: white;
            border: 1px solid #4F46E5;
          }
          
          .pricing-button-secondary:hover {
            background-color: #F9FAFB;
          }
          
          /* CTAセクション */
          .cta {
            padding: 5rem 0;
            background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
            color: white;
            text-align: center;
          }
          
          .cta-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .cta-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          .cta-subtitle {
            font-size: 1.125rem;
            margin-bottom: 2rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            opacity: 0.9;
          }
          
          .cta-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            font-size: 1rem;
            color: #4F46E5;
            background-color: white;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            display: inline-block;
          }
          
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          /* フッター */
          .footer {
            background-color: #1F2937;
            color: white;
            padding: 4rem 0 2rem;
          }
          
          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
          }
          
          .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
            text-decoration: none;
          }
          
          .footer-description {
            color: #D1D5DB;
            margin-bottom: 1.5rem;
            max-width: 300px;
          }
          
          .social-links {
            display: flex;
            gap: 1rem;
          }
          
          .social-link {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            background-color: #374151;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: background-color 0.2s;
            text-decoration: none;
          }
          
          .social-link:hover {
            background-color: #4B5563;
          }
          
          .footer-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1.25rem;
            color: white;
          }
          
          .footer-links {
            list-style-type: none;
          }
          
          .footer-link {
            margin-bottom: 0.75rem;
          }
          
          .footer-link a {
            color: #D1D5DB;
            text-decoration: none;
            transition: color 0.2s;
          }
          
          .footer-link a:hover {
            color: white;
          }
          
          .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 2rem;
            text-align: center;
            color: #9CA3AF;
            font-size: 0.875rem;
          }
          
          /* レスポンシブデザイン */
          @media (min-width: 640px) {
            .features-grid, .pricing-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 768px) {
            .hero-title {
              font-size: 3.5rem;
            }
          }
          
          @media (min-width: 1024px) {
            .features-grid, .pricing-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            
            .footer-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .nav-links, .auth-buttons {
              display: none;
            }
            
            .menu-button {
              display: block;
            }
            
            .mobile-menu {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: white;
              z-index: 200;
              padding: 2rem;
              display: flex;
              flex-direction: column;
              transform: translateX(100%);
              transition: transform 0.3s ease-in-out;
            }
            
            .mobile-menu.open {
              transform: translateX(0);
            }
            
            .mobile-menu-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 2rem;
            }
            
            .mobile-menu-close {
              background: none;
              border: none;
              font-size: 1.5rem;
              cursor: pointer;
              color: #4B5563;
            }
            
            .mobile-nav-links {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              margin-bottom: 2rem;
            }
            
            .mobile-nav-link {
              color: #4B5563;
              text-decoration: none;
              font-weight: 500;
              font-size: 1.125rem;
            }
            
            .mobile-auth-buttons {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}</style>
      </Head>

      {/* ローディングオーバーレイ */}
      <div className={`loading-overlay ${isLoading ? '' : 'fade-out'}`}>
        <div className="spinner"></div>
      </div>

      {/* ヘッダー */}
      <header className="header">
        <div className="header-container">
          <Link href="/" className="logo">
            SubsManager
          </Link>
          
          <nav className="nav-links">
            <Link href="#features" className="nav-link">機能</Link>
            <Link href="#pricing" className="nav-link">料金プラン</Link>
            <Link href="#faq" className="nav-link">よくある質問</Link>
            <Link href="#contact" className="nav-link">お問い合わせ</Link>
          </nav>
          
          <div className="auth-buttons">
            <Link href="/login" className="login-button">ログイン</Link>
            <Link href="/register" className="signup-button">新規登録</Link>
          </div>
          
          <button className="menu-button">
            ☰
          </button>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">サブスクリプションを<br />スマートに管理</h1>
          <p className="hero-subtitle">
            月額サービスの管理、支出の最適化、支払い忘れの防止を一つのアプリで。
            あなたの財布を守る最適なツールです。
          </p>
          
          <div className="hero-buttons">
            <Link href="/register" className="hero-primary-button">
              無料で始める
            </Link>
            <Link href="#features" className="hero-secondary-button">
              詳細を見る
            </Link>
          </div>
          
          <div>
            <img 
              src="https://via.placeholder.com/800x450" 
              alt="サブスクリプション管理アプリのダッシュボード" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title">主な機能</h2>
          <p className="section-subtitle">
            サブスクリプション管理をシンプルかつ効率的に。
            あなたの時間とお金を節約するための機能が揃っています。
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon feature-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="feature-title">支払い日のリマインダー</h3>
              <p className="feature-description">
                支払い期日が近づくと自動的に通知。
                うっかり忘れによる延滞料金を防ぎます。
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon feature-icon-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="feature-title">支出の分析と最適化</h3>
              <p className="feature-description">
                月々の支出を視覚化し、節約できる可能性のある
                サブスクリプションを特定します。
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon feature-icon-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="feature-title">一元管理</h3>
              <p className="feature-description">
                すべてのサブスクリプションを一箇所で管理。
                複数のサービスの追跡が簡単になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="pricing" id="pricing">
        <div className="pricing-container">
          <h2 className="section-title">料金プラン</h2>
          <p className="section-subtitle">
            あなたのニーズに合わせた柔軟なプランをご用意しています。
            いつでもアップグレードやダウングレードが可能です。
          </p>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-name">無料プラン</h3>
              <div className="pricing-price">¥0 <span>/月</span></div>
              <p className="pricing-description">個人での基本的な使用に最適</p>
              
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  最大5つのサブスクリプション
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  基本的なリマインダー
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  月次レポート
                </li>
              </ul>
              
              <Link href="/register" className="pricing-button pricing-button-secondary">
                無料で始める
              </Link>
            </div>
            
            <div className="pricing-card pricing-card-popular">
              <div className="popular-badge">人気</div>
              <h3 className="pricing-name">プレミアム</h3>
              <div className="pricing-price">¥980 <span>/月</span></div>
              <p className="pricing-description">より多くの機能が必要な方に</p>
              
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  無制限のサブスクリプション
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  高度なリマインダー
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  詳細な分析レポート
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  カスタムカテゴリ
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  優先サポート
                </li>
              </ul>
              
              <Link href="/register" className="pricing-button pricing-button-primary">
                今すぐ始める
              </Link>
            </div>
            
            <div className="pricing-card">
              <h3 className="pricing-name">ビジネス</h3>
              <div className="pricing-price">¥2,980 <span>/月</span></div>
              <p className="pricing-description">チームや企業向け</p>
              
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  プレミアムのすべての機能
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  最大10ユーザー
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  チーム管理機能
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  経費レポート
                </li>
                <li className="pricing-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  API連携
                </li>
              </ul>
              
              <Link href="/contact" className="pricing-button pricing-button-secondary">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="cta">
        <div className="cta-container">
          <h2 className="cta-title">今すぐサブスクリプション管理を始めましょう</h2>
          <p className="cta-subtitle">
            無料プランで始めて、サブスクリプションの管理がいかに簡単になるかを体験してください。
            クレジットカード情報は必要ありません。
          </p>
          <Link href="/register" className="cta-button">
            無料アカウントを作成
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="footer-logo">
                SubsManager
              </Link>
              <p className="footer-description">
                サブスクリプション管理をシンプルに。
                あなたの時間とお金を節約します。
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="footer-title">製品</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">機能</a></li>
                <li className="footer-link"><a href="#">料金プラン</a></li>
                <li className="footer-link"><a href="#">ロードマップ</a></li>
                <li className="footer-link"><a href="#">リリースノート</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-title">会社情報</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">私たちについて</a></li>
                <li className="footer-link"><a href="#">ブログ</a></li>
                <li className="footer-link"><a href="#">採用情報</a></li>
                <li className="footer-link"><a href="#">お問い合わせ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-title">サポート</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">ヘルプセンター</a></li>
                <li className="footer-link"><a href="#">よくある質問</a></li>
                <li className="footer-link"><a href="#">プライバシーポリシー</a></li>
                <li className="footer-link"><a href="#">利用規約</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 SubsManager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  ) ;
}
