import React from 'react';
import { CheckCircle, TrendingUp, Clock, Zap } from 'lucide-react';

interface TaskMetricsProps {
  completedToday: number;
  completedThisWeek: number;
  completionRate: number;
  averageTime: string;
  currentStreak: number;
}

export function TaskMetrics({
  completedToday,
  completedThisWeek,
  completionRate,
  averageTime,
  currentStreak
}: TaskMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        icon={CheckCircle}
        title="Tasks Completed"
        value={`${completedToday}/${completedThisWeek}`}
        subtitle="Today/This Week"
        color="text-green-500"
      />
      <MetricCard
        icon={TrendingUp}
        title="Completion Rate"
        value={`${completionRate}%`}
        subtitle="Last 7 Days"
        color="text-blue-500"
      />
      <MetricCard
        icon={Clock}
        title="Average Time"
        value={averageTime}
        subtitle="Per Task"
        color="text-purple-500"
      />
      <MetricCard
        icon={Zap}
        title="Current Streak"
        value={`${currentStreak} days`}
        subtitle="Keep it up!"
        color="text-yellow-500"
      />
    </div>
  );
}

interface MetricCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

function MetricCard({ icon: Icon, title, value, subtitle, color }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-5 h-5 ${color}`} />
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
      </div>
      <p className="text-2xl font-semibold text-gray-900 dark:text-dark-text-primary mb-1">{value}</p>
      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">{subtitle}</p>
    </div>
  );
}