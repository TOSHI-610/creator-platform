'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// サンプルデータ
const subscriptionData = [
  { id: 1, name: 'Netflix', price: 1490, billingDate: '毎月15日', category: 'エンターテイメント', color: '#E50914' },
  { id: 2, name: 'Spotify', price: 980, billingDate: '毎月1日', category: '音楽', color: '#1DB954' },
  { id: 3, name: 'Amazon Prime', price: 500, billingDate: '毎月20日', category: 'ショッピング', color: '#FF9900' },
  { id: 4, name: 'YouTube Premium', price: 1180, billingDate: '毎月5日', category: 'エンターテイメント', color: '#FF0000' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [totalMonthly, setTotalMonthly] = useState(0);
  const [upcomingPayments, setUpcomingPayments] = useState<any[]>([]);

  useEffect(() => {
    // 月額合計を計算
    const total = subscriptionData.reduce((sum, sub) => sum + sub.price, 0);
    setTotalMonthly(total);

    // 今後7日以内の支払いを抽出（実際の実装ではより複雑な日付計算が必要）
    const upcoming = subscriptionData.filter((_, index) => index < 2);
    setUpcomingPayments(upcoming);
  }, []);

  // インラインスタイル
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#F9FAFB'
    },
    header: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1rem 0'
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem'
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1a202c'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center'
    },
    notificationButton: {
      padding: '0.5rem',
      borderRadius: '9999px',
      color: '#6B7280',
      cursor: 'pointer'
    },
    avatar: {
      marginLeft: '1rem',
      height: '2rem',
      width: '2rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      color: 'white',
      fontWeight: '500',
      fontSize: '0.875rem'
    },
    main: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '2rem 1rem'
    },
    tabs: {
      borderBottom: '1px solid #E5E7EB',
      marginBottom: '2rem',
      display: 'flex',
      gap: '2rem'
    },
    tab: {
      paddingBottom: '1rem',
      paddingLeft: '0.25rem',
      paddingRight: '0.25rem',
      borderBottom: '2px solid transparent',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      color: '#6B7280',
      transition: 'all 0.2s'
    },
    activeTab: {
      borderBottomColor: '#4F46E5',
      color: '#4F46E5'
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    cardContent: {
      padding: '1.25rem'
    },
    cardTitle: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#6B7280',
      marginBottom: '0.5rem'
    },
    cardValue: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1a202c'
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1a202c',
      marginBottom: '1rem'
    },
    paymentsList: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '2rem'
    },
    paymentItem: {
      padding: '1rem',
      borderBottom: '1px solid #E5E7EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    paymentItemLeft: {
      display: 'flex',
      alignItems: 'center'
    },
    paymentLogo: {
      height: '2.5rem',
      width: '2.5rem',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '600',
      fontSize: '1rem'
    },
    paymentInfo: {
      marginLeft: '1rem'
    },
    paymentName: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#1a202c'
    },
    paymentDate: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    paymentPrice: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#1a202c'
    },
    actionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '1rem'
    },
    primaryButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1rem',
      backgroundColor: '#4F46E5',
      color: 'white',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.2s'
    },
    secondaryButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 1rem',
      backgroundColor: 'white',
      color: '#4B5563',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      border: '1px solid #E5E7EB',
      transition: 'all 0.2s'
    },
    buttonIcon: {
      marginRight: '0.5rem',
      height: '1.25rem',
      width: '1.25rem'
    },
    subscriptionsList: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    subscriptionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      paddingLeft: '0.625rem',
      paddingRight: '0.625rem',
      paddingTop: '0.125rem',
      paddingBottom: '0.125rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      backgroundColor: '#EEF2FF',
      color: '#4F46E5'
    },
    chartPlaceholder: {
      height: '16rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      color: '#6B7280',
      padding: '1.5rem',
      marginBottom: '2rem'
    }
  };

  // メディアクエリのためのスタイル調整
  useEffect(() => {
    const updateStyles = () => {
      if (window.innerWidth >= 768) {
        // md以上の画面サイズ
        setGridColumns('repeat(3, 1fr)');
        setActionsColumns('repeat(2, 1fr)');
      } else {
        // sm以下の画面サイズ
        setGridColumns('repeat(1, 1fr)');
        setActionsColumns('repeat(1, 1fr)');
      }
    };

    // 初期設定
    updateStyles();

    // リサイズイベントリスナー
    window.addEventListener('resize', updateStyles);
    return () => window.removeEventListener('resize', updateStyles);
  }, []);

  const [gridColumns, setGridColumns] = useState('repeat(1, 1fr)');
  const [actionsColumns, setActionsColumns] = useState('repeat(1, 1fr)');

  return (
    <div style={styles.container} className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ヘッダー */}
      <header style={styles.header} className="bg-white dark:bg-gray-800 shadow-sm">
        <div style={styles.headerContent} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <h1 style={styles.logo} className="text-xl font-bold text-gray-900 dark:text-white">サブスクリプション管理</h1>
          <div style={styles.headerRight} className="flex items-center">
            <button style={styles.notificationButton} className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div style={styles.avatar} className="ml-4 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-medium">
              UT
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main style={styles.main} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* タブナビゲーション */}
        <div style={styles.tabs} className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={()  => setActiveTab('overview')}
            style={{
              ...styles.tab,
              ...(activeTab === 'overview' ? styles.activeTab : {})
            }}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            概要
          </button>
          <button
            onClick={() => setActiveTab('subscriptions')}
            style={{
              ...styles.tab,
              ...(activeTab === 'subscriptions' ? styles.activeTab : {})
            }}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'subscriptions'
                ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            サブスクリプション一覧
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            style={{
              ...styles.tab,
              ...(activeTab === 'analytics' ? styles.activeTab : {})
            }}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'analytics'
                ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            分析
          </button>
        </div>

        {/* 概要タブ */}
        {activeTab === 'overview' && (
          <div>
            {/* サマリーカード */}
            <div style={{...styles.cardsGrid, gridTemplateColumns: gridColumns}} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div style={styles.card} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div style={styles.cardContent} className="px-4 py-5 sm:p-6">
                  <div style={styles.cardTitle} className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">月額合計</div>
                  <div style={styles.cardValue} className="text-lg font-medium text-gray-900 dark:text-white">¥{totalMonthly.toLocaleString()}</div>
                </div>
              </div>

              <div style={styles.card} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div style={styles.cardContent} className="px-4 py-5 sm:p-6">
                  <div style={styles.cardTitle} className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">アクティブなサブスクリプション</div>
                  <div style={styles.cardValue} className="text-lg font-medium text-gray-900 dark:text-white">{subscriptionData.length}</div>
                </div>
              </div>

              <div style={styles.card} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div style={styles.cardContent} className="px-4 py-5 sm:p-6">
                  <div style={styles.cardTitle} className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">次回の支払い</div>
                  <div style={styles.cardValue} className="text-lg font-medium text-gray-900 dark:text-white">5月1日</div>
                </div>
              </div>
            </div>

            {/* 今後の支払い */}
            <h2 style={styles.sectionTitle} className="text-lg font-medium text-gray-900 dark:text-white mb-4">今後の支払い</h2>
            <div style={styles.paymentsList} className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md mb-8">
              <ul>
                {upcomingPayments.map((subscription) => (
                  <li key={subscription.id} style={styles.paymentItem} className="px-4 py-4 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                    <div style={styles.paymentItemLeft} className="flex items-center">
                      <div 
                        style={{
                          ...styles.paymentLogo,
                          backgroundColor: subscription.color
                        }} 
                        className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                      >
                        {subscription.name.charAt(0)}
                      </div>
                      <div style={styles.paymentInfo} className="ml-4">
                        <div style={styles.paymentName} className="text-sm font-medium text-gray-900 dark:text-white">{subscription.name}</div>
                        <div style={styles.paymentDate} className="text-sm text-gray-500 dark:text-gray-400">{subscription.billingDate}</div>
                      </div>
                    </div>
                    <div style={styles.paymentPrice} className="text-sm font-medium text-gray-900 dark:text-white">¥{subscription.price.toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* クイックアクション */}
            <h2 style={styles.sectionTitle} className="text-lg font-medium text-gray-900 dark:text-white mb-4">クイックアクション</h2>
            <div style={{...styles.actionsGrid, gridTemplateColumns: actionsColumns}} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button style={styles.primaryButton} className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <svg style={styles.buttonIcon} className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                新しいサブスクリプションを追加
              </button>
              <button style={styles.secondaryButton} className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <svg style={styles.buttonIcon} className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                レポートをエクスポート
              </button>
            </div>
          </div>
        ) }

        {/* サブスクリプション一覧タブ */}
        {activeTab === 'subscriptions' && (
          <div>
            <div style={styles.subscriptionHeader} className="flex justify-between items-center mb-6">
              <h2 style={styles.sectionTitle} className="text-lg font-medium text-gray-900 dark:text-white">すべてのサブスクリプション</h2>
              <button style={styles.primaryButton} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <svg style={{...styles.buttonIcon, marginRight: '0.5rem', height: '1rem', width: '1rem'}} className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                追加
              </button>
            </div>
            
            <div style={styles.subscriptionsList} className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul>
                {subscriptionData.map((subscription)  => (
                  <li key={subscription.id} style={styles.paymentItem} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                    <div style={styles.paymentItemLeft} className="flex items-center">
                      <div 
                        style={{
                          ...styles.paymentLogo,
                          backgroundColor: subscription.color
                        }} 
                        className="flex-shrink-0 h-12 w-12 rounded-md flex items-center justify-center"
                      >
                        {subscription.name.charAt(0)}
                      </div>
                      <div style={styles.paymentInfo} className="ml-4">
                        <div style={styles.paymentName} className="text-sm font-medium text-gray-900 dark:text-white">{subscription.name}</div>
                        <div style={{display: 'inline-block', ...styles.badge}} className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          {subscription.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div style={{textAlign: 'right', marginRight: '1.5rem'}}>
                        <div style={styles.paymentPrice} className="text-sm font-medium text-gray-900 dark:text-white">¥{subscription.price.toLocaleString()}</div>
                        <div style={styles.paymentDate} className="text-xs text-gray-500 dark:text-gray-400">{subscription.billingDate}</div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ) )}
              </ul>
            </div>
          </div>
        )}

        {/* 分析タブ */}
        {activeTab === 'analytics' && (
          <div>
            <div style={styles.chartPlaceholder} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
              <div style={{textAlign: 'center'}}>
                <h2 style={{...styles.sectionTitle, marginBottom: '1rem'}} className="text-lg font-medium text-gray-900 dark:text-white">カテゴリ別支出</h2>
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '500'
                }}>
                  グラフ表示エリア（実装時にはChart.jsなどで実装）
                </div>
              </div>
            </div>
            
            <div style={styles.chartPlaceholder} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <div style={{textAlign: 'center'}}>
                <h2 style={{...styles.sectionTitle, marginBottom: '1rem'}} className="text-lg font-medium text-gray-900 dark:text-white">月別支出推移</h2>
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #9F7AEA 0%, #6B46C1 100%)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '500'
                }}>
                  グラフ表示エリア（実装時にはChart.jsなどで実装）
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
