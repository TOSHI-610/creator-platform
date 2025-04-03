'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Netflix', price: 1200, billingCycle: '月額', nextBillingDate: '2025-05-01', category: 'エンターテイメント' },
    { id: 2, name: 'Spotify', price: 980, billingCycle: '月額', nextBillingDate: '2025-04-15', category: '音楽' },
    { id: 3, name: 'Amazon Prime', price: 4900, billingCycle: '年額', nextBillingDate: '2025-08-20', category: 'ショッピング' },
    { id: 4, name: 'Notion', price: 2000, billingCycle: '月額', nextBillingDate: '2025-04-10', category: '仕事効率化' }
  ]);

  useEffect(() => {
    // データ読み込みのシミュレーション
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // 月額合計を計算
  const calculateMonthlyTotal = () => {
    return subscriptions.reduce((total, sub) => {
      if (sub.billingCycle === '月額') {
        return total + sub.price;
      } else if (sub.billingCycle === '年額') {
        return total + (sub.price / 12);
      }
      return total;
    }, 0);
  };

  return (
    <>
      <Head>
        <title>ダッシュボード - サブスクリプション管理</title>
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
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top-color: #3b82f6;
            animation: spin 1s ease-in-out infinite;
            margin: 0 auto;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* ダッシュボードレイアウト */
          .dashboard-container {
            min-height: 100vh;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
            padding: 20px;
          }
          
          .dashboard-header {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            margin-bottom: 20px;
          }
          
          .dashboard-title {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 5px;
          }
          
          .dashboard-subtitle {
            font-size: 14px;
            color: #64748b;
          }
          
          .dashboard-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          @media (min-width: 768px) {
            .dashboard-content {
              flex-direction: row;
            }
            
            .dashboard-sidebar {
              width: 250px;
              flex-shrink: 0;
            }
            
            .dashboard-main {
              flex-grow: 1;
            }
          }
          
          .dashboard-sidebar {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          
          .dashboard-main {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          
          /* ナビゲーション */
          .nav-list {
            list-style: none;
          }
          
          .nav-item {
            margin-bottom: 10px;
          }
          
          .nav-link {
            display: block;
            padding: 10px;
            border-radius: 5px;
            color: #64748b;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .nav-link:hover {
            background-color: #f1f5f9;
          }
          
          .nav-link.active {
            background-color: #3b82f6;
            color: white;
          }
          
          /* タブ */
          .tabs {
            display: flex;
            border-bottom: 1px solid #e2e8f0;
            margin-bottom: 20px;
          }
          
          .tab {
            padding: 10px 20px;
            cursor: pointer;
            color: #64748b;
            border-bottom: 2px solid transparent;
          }
          
          .tab:hover {
            color: #3b82f6;
          }
          
          .tab.active {
            color: #3b82f6;
            border-bottom-color: #3b82f6;
          }
          
          /* カード */
          .card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            margin-bottom: 20px;
          }
          
          .card-title {
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 15px;
          }
          
          /* 統計カード */
          .stats-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 15px;
            margin-bottom: 20px;
          }
          
          @media (min-width: 640px) {
            .stats-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .stats-container {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          
          .stat-card {
            background: white;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          
          .stat-title {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 5px;
          }
          
          .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
          }
          
          .stat-badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 500;
            margin-top: 5px;
          }
          
          .stat-badge.positive {
            background-color: #dcfce7;
            color: #166534;
          }
          
          .stat-badge.negative {
            background-color: #fee2e2;
            color: #991b1b;
          }
          
          /* テーブル */
          .table-container {
            overflow-x: auto;
          }
          
          .table {
            width: 100%;
            border-collapse: collapse;
          }
          
          .table th {
            text-align: left;
            padding: 12px 15px;
            background-color: #f8fafc;
            color: #64748b;
            font-weight: 600;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .table tr:hover {
            background-color: #f1f5f9;
          }
          
          /* バッジ */
          .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 500;
          }
          
          .badge-blue {
            background-color: #dbeafe;
            color: #1e40af;
          }
          
          .badge-purple {
            background-color: #ede9fe;
            color: #5b21b6;
          }
          
          .badge-green {
            background-color: #dcfce7;
            color: #166534;
          }
          
          .badge-orange {
            background-color: #ffedd5;
            color: #9a3412;
          }
          
          /* ボタン */
          .button {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 5px;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          
          .button-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            border: none;
          }
          
          .button-primary:hover {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }
          
          .button-outline {
            background: transparent;
            color: #3b82f6;
            border: 1px solid #3b82f6;
          }
          
          .button-outline:hover {
            background-color: #eff6ff;
          }
          
          /* チャート */
          .chart-container {
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 500;
            margin-top: 16px;
          }
        `}</style>
      </Head>

      <div className="dashboard-container">
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <div className="dashboard-header">
              <h1 className="dashboard-title">サブスクリプション管理ダッシュボード</h1>
              <p className="dashboard-subtitle">あなたのサブスクリプションを一元管理</p>
            </div>
            
            <div className="dashboard-content">
              <div className="dashboard-sidebar">
                <nav>
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="#" className="nav-link active">ダッシュボード</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">サブスクリプション</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">支払い履歴</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">予算設定</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">アカウント設定</a>
                    </li>
                  </ul>
                </nav>
              </div>
              
              <div className="dashboard-main">
                <div className="tabs">
                  <div 
                    className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    概要
                  </div>
                  <div 
                    className={`tab ${activeTab === 'subscriptions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('subscriptions')}
                  >
                    サブスクリプション
                  </div>
                  <div 
                    className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
                    onClick={() => setActiveTab('analytics')}
                  >
                    分析
                  </div>
                </div>
                
                {activeTab === 'overview' && (
                  <div>
                    <div className="stats-container">
                      <div className="stat-card">
                        <div className="stat-title">月額合計</div>
                        <div className="stat-value">¥{calculateMonthlyTotal().toLocaleString()}</div>
                        <div className="stat-badge positive">前月比 5% 減</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-title">アクティブなサブスク</div>
                        <div className="stat-value">{subscriptions.length}</div>
                        <div className="stat-badge positive">1件追加</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-title">次回の支払い</div>
                        <div className="stat-value">¥980</div>
                        <div className="stat-badge">4月10日</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-title">年間総額</div>
                        <div className="stat-value">¥{(calculateMonthlyTotal() * 12).toLocaleString()}</div>
                        <div className="stat-badge negative">予算超過</div>
                      </div>
                    </div>
                    
                    <div className="card">
                      <h2 className="card-title">支出の傾向</h2>
                      <div className="chart-container">
                        ここにチャートが表示されます
                      </div>
                    </div>
                    
                    <div className="card">
                      <h2 className="card-title">近日中の支払い</h2>
                      <div className="table-container">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>サービス</th>
                              <th>金額</th>
                              <th>支払日</th>
                              <th>カテゴリ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {subscriptions
                              .sort((a, b) => new Date(a.nextBillingDate).getTime() - new Date(b.nextBillingDate).getTime())
                              .slice(0, 3)
                              .map(subscription => (
                                <tr key={subscription.id}>
                                  <td>{subscription.name}</td>
                                  <td>¥{subscription.price.toLocaleString()}</td>
                                  <td>{new Date(subscription.nextBillingDate).toLocaleDateString('ja-JP')}</td>
                                  <td>
                                    <span className={`badge ${
                                      subscription.category === 'エンターテイメント' ? 'badge-blue' :
                                      subscription.category === '音楽' ? 'badge-purple' :
                                      subscription.category === 'ショッピング' ? 'badge-orange' : 'badge-green'
                                    }`}>
                                      {subscription.category}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'subscriptions' && (
                  <div>
                    <div className="card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2 className="card-title">すべてのサブスクリプション</h2>
                        <a href="#" className="button button-primary">+ 新規追加</a>
                      </div>
                      <div className="table-container">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>サービス</th>
                              <th>金額</th>
                              <th>請求サイクル</th>
                              <th>次回支払日</th>
                              <th>カテゴリ</th>
                              <th>アクション</th>
                            </tr>
                          </thead>
                          <tbody>
                            {subscriptions.map(subscription => (
                              <tr key={subscription.id}>
                                <td>{subscription.name}</td>
                                <td>¥{subscription.price.toLocaleString()}</td>
                                <td>{subscription.billingCycle}</td>
                                <td>{new Date(subscription.nextBillingDate).toLocaleDateString('ja-JP')}</td>
                                <td>
                                  <span className={`badge ${
                                    subscription.category === 'エンターテイメント' ? 'badge-blue' :
                                    subscription.category === '音楽' ? 'badge-purple' :
                                    subscription.category === 'ショッピング' ? 'badge-orange' : 'badge-green'
                                  }`}>
                                    {subscription.category}
                                  </span>
                                </td>
                                <td>
                                  <div style={{ display: 'flex', gap: '8px' }}>
                                    <a href="#" className="button button-outline">編集</a>
                                    <a href="#" className="button button-outline">削除</a>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'analytics' && (
                  <div>
                    <div className="card">
                      <h2 className="card-title">カテゴリ別支出</h2>
                      <div className="chart-container">
                        ここに円グラフが表示されます
                      </div>
                    </div>
                    
                    <div className="card">
                      <h2 className="card-title">月別支出推移</h2>
                      <div className="chart-container">
                        ここに棒グラフが表示されます
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

