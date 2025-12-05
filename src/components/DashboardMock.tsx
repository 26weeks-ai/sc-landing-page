import { TrendingUp } from 'lucide-react';

export function DashboardMock() {
  const platforms = [
    { name: 'Facebook', color: '#3A6FF8' },
    { name: 'Instagram', color: '#6A4BFF' },
    { name: 'Reddit', color: '#2EE7E0' },
    { name: 'LinkedIn', color: '#3A6FF8' },
  ];

  const chartData = [20, 35, 45, 60, 50, 75, 85, 95];

  return (
    <div 
      className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 shadow-2xl"
      style={{
        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
        boxShadow: '0 40px 80px -20px rgba(58, 111, 248, 0.3), 0 0 60px -15px rgba(106, 75, 255, 0.2)',
      }}
    >
      {/* Glow effects */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3A6FF8] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#6A4BFF] rounded-full blur-3xl opacity-20"></div>

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-white mb-1" style={{ fontSize: '1.25rem' }}>Active AI Agents</h3>
        <p className="text-slate-400" style={{ fontSize: '0.875rem' }}>Real-time monitoring</p>
      </div>

      {/* Platform Status */}
      <div className="space-y-3 mb-6">
        {platforms.map((platform, index) => (
          <div 
            key={platform.name}
            className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all"
            style={{
              animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`,
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: '#37FF8B',
                  boxShadow: '0 0 10px rgba(55, 255, 139, 0.5)',
                }}
              ></div>
              <span className="text-white" style={{ fontSize: '0.95rem' }}>{platform.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span 
                className="px-2.5 py-1 rounded-md text-xs"
                style={{ 
                  backgroundColor: 'rgba(55, 255, 139, 0.1)',
                  color: '#37FF8B',
                  border: '1px solid rgba(55, 255, 139, 0.2)',
                }}
              >
                Online
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Chart */}
      <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-300" style={{ fontSize: '0.875rem' }}>Conversations</span>
          <div className="flex items-center gap-1 text-[#37FF8B]" style={{ fontSize: '0.875rem' }}>
            <TrendingUp className="w-4 h-4" />
            <span>+47%</span>
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {chartData.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-[#3A6FF8] to-[#6A4BFF] rounded-t"
              style={{
                height: `${value}%`,
                opacity: 0.8,
                animation: `growBar 0.8s ease-out ${index * 0.05}s backwards`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growBar {
          from {
            height: 0;
          }
        }
      `}</style>
    </div>
  );
}
