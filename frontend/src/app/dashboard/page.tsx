'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// サンプルデータ（実際の実装では、APIやFirestoreから取得）
const subscriptionData = [
  { id: 1, name: 'Netflix', price: 1490, billingDate: '毎月15日', category: 'エンターテイメント', logo: '/netflix-logo.png' },
  { id: 2, name: 'Spotify', price: 980, billingDate: '毎月1日', category: '音楽', logo: '/spotify-logo.png' },
  { id: 3, name: 'Amazon Prime', price: 500, billingDate: '毎月20日', category: 'ショッピング', logo: '/amazon-logo.png' },
  { id: 4, name: 'YouTube Premium', price: 1180, billingDate: '毎月5日', category: 'エンターテイメント', logo: '/youtube-logo.png' },
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">サブスクリプション管理</h1>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-4 relative flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-medium">
                  UT
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* タブナビゲーション */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={()  => setActiveTab('overview')}
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
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              分析
            </button>
          </nav>
        </div>

        {/* 概要タブ */}
        {activeTab === 'overview' && (
          <div>
            {/* サマリーカード */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-md p-3">
                      <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">月額合計</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900 dark:text-white">¥{totalMonthly.toLocaleString() }</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-md p-3">
                      <svg className="h-6 w-6 text-green-600 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">アクティブなサブスクリプション</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900 dark:text-white">{subscriptionData.length}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-md p-3">
                      <svg className="h-6 w-6 text-purple-600 dark:text-purple-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">次回の支払い</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900 dark:text-white">5月1日</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 今後の支払い */}
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">今後の支払い</h2>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md mb-8">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {upcomingPayments.map((subscription)  => (
                  <li key={subscription.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            {/* ロゴの代わりに頭文字を表示 */}
                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{subscription.name.charAt(0)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{subscription.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{subscription.billingDate}</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">¥{subscription.price.toLocaleString()}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* クイックアクション */}
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">クイックアクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                新しいサブスクリプションを追加
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">すべてのサブスクリプション</h2>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                追加
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {subscriptionData.map((subscription)  => (
                  <li key={subscription.id}>
                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            {/* ロゴの代わりに頭文字を表示 */}
                            <span className="text-xl font-medium text-gray-800 dark:text-gray-200">{subscription.name.charAt(0)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{subscription.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                {subscription.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="mr-6 text-right">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">¥{subscription.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{subscription.billingDate}</div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
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
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">カテゴリ別支出</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">グラフを表示するには、実際の実装でChart.jsなどのライブラリを使用してください。</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">月別支出推移</h2>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">グラフを表示するには、実際の実装でChart.jsなどのライブラリを使用してください。</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

