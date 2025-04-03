'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // サンプルデータ
  const subscriptions = [
    { id: 1, name: 'Netflix', price: 1200, billingCycle: '月額', nextBillingDate: '2025-05-01', category: 'エンターテイメント' },
    { id: 2, name: 'Spotify', price: 980, billingCycle: '月額', nextBillingDate: '2025-04-15', category: '音楽' },
    { id: 3, name: 'Amazon Prime', price: 4900, billingCycle: '年額', nextBillingDate: '2025-08-20', category: 'ショッピング' }
  ];

  // 月額合計を計算
  const monthlyTotal = subscriptions.reduce((total, sub) => {
    if (sub.billingCycle === '月額') {
      return total + sub.price;
    } else if (sub.billingCycle === '年額') {
      return total + (sub.price / 12);
    }
    return total;
  }, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>サブスクリプション管理ダッシュボード</h1>
      
      {/* タブナビゲーション */}
      <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('overview')}
          style={{ 
            padding: '10px 15px', 
            marginRight: '10px',
            backgroundColor: activeTab === 'overview' ? '#3b82f6' : 'transparent',
            color: activeTab === 'overview' ? 'white' : '#64748b',
            border: 'none',
            borderRadius: '5px 5px 0 0',
            cursor: 'pointer'
          }}
        >
          概要
        </button>
        <button 
          onClick={() => setActiveTab('subscriptions')}
          style={{ 
            padding: '10px 15px', 
            backgroundColor: activeTab === 'subscriptions' ? '#3b82f6' : 'transparent',
            color: activeTab === 'subscriptions' ? 'white' : '#64748b',
            border: 'none',
            borderRadius: '5px 5px 0 0',
            cursor: 'pointer'
          }}
        >
          サブスクリプション一覧
        </button>
      </div>
      
      {/* 概要タブ */}
      {activeTab === 'overview' && (
        <div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
            }}>
              <div style={{ fontSize: '14px', color: '#64748b' }}>月額合計</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>¥{Math.round(monthlyTotal).toLocaleString()}</div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
            }}>
              <div style={{ fontSize: '14px', color: '#64748b' }}>アクティブなサブスク</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>{subscriptions.length}</div>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
            }}>
              <div style={{ fontSize: '14px', color: '#64748b' }}>年間総額</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>¥{Math.round(monthlyTotal * 12).toLocaleString()}</div>
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>近日中の支払い</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>サービス</th>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>金額</th>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>支払日</th>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>カテゴリ</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions
                  .sort((a, b) => new Date(a.nextBillingDate).getTime() - new Date(b.nextBillingDate).getTime())
                  .map(subscription => (
                    <tr key={subscription.id}>
                      <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{subscription.name}</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>¥{subscription.price.toLocaleString()}</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{new Date(subscription.nextBillingDate).toLocaleDateString('ja-JP')}</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: 
                            subscription.category === 'エンターテイメント' ? '#dbeafe' : 
                            subscription.category === '音楽' ? '#ede9fe' : 
                            subscription.category === 'ショッピング' ? '#ffedd5' : '#dcfce7',
                          color: 
                            subscription.category === 'エンターテイメント' ? '#1e40af' : 
                            subscription.category === '音楽' ? '#5b21b6' : 
                            subscription.category === 'ショッピング' ? '#9a3412' : '#166534'
                        }}>
                          {subscription.category}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* サブスクリプション一覧タブ */}
      {activeTab === 'subscriptions' && (
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px' }}>すべてのサブスクリプション</h2>
            <button style={{ 
              backgroundColor: '#3b82f6', 
              color: 'white', 
              padding: '8px 16px', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer'
            }}>
              + 新規追加
            </button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>サービス</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>金額</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>請求サイクル</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>次回支払日</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>カテゴリ</th>
                <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>アクション</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map(subscription => (
                <tr key={subscription.id}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{subscription.name}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>¥{subscription.price.toLocaleString()}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{subscription.billingCycle}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{new Date(subscription.nextBillingDate).toLocaleDateString('ja-JP')}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: 
                        subscription.category === 'エンターテイメント' ? '#dbeafe' : 
                        subscription.category === '音楽' ? '#ede9fe' : 
                        subscription.category === 'ショッピング' ? '#ffedd5' : '#dcfce7',
                      color: 
                        subscription.category === 'エンターテイメント' ? '#1e40af' : 
                        subscription.category === '音楽' ? '#5b21b6' : 
                        subscription.category === 'ショッピング' ? '#9a3412' : '#166534'
                    }}>
                      {subscription.category}
                    </span>
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{ 
                        padding: '5px 10px', 
                        backgroundColor: 'transparent', 
                        color: '#3b82f6', 
                        border: '1px solid #3b82f6', 
                        borderRadius: '5px', 
                        cursor: 'pointer'
                      }}>
                        編集
                      </button>
                      <button style={{ 
                        padding: '5px 10px', 
                        backgroundColor: 'transparent', 
                        color: '#ef4444', 
                        border: '1px solid #ef4444', 
                        borderRadius: '5px', 
                        cursor: 'pointer'
                      }}>
                        削除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#64748b' }}>
        © 2025 サブスクリプション管理アプリ
      </div>
    </div>
  );
}
