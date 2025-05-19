import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return axios.get<TableData[]>('/api/popular/list', { params });
}

export interface CallData {
  date: string;
  spend: number;
  call: number;
  tokens: number;
  user: number;
  app: number;
  abnormal: number;
}

export interface CallDataRes {
  items: CallData[];
}

export function queryCallData(days: number) {
  return axios.get<CallDataRes>(`/api/v1/dashboard/call/data/${days}`);
}

export interface BaseDataRecord {
  app: number;
  today_app: number;
  model: number;
  app_key: number;
  model_key: number;
  user: number;
  today_user: number;
  call: number;
  group: number;
}

export function queryBaseData() {
  return axios.get<BaseDataRecord>('/api/v1/dashboard/base/data');
}

export interface Expense {
  quota: number;
  quota_usd: number;
  used_quota: number;
  used_quota_usd: number;
  allocated_quota: number;
  to_be_allocated: number;
  quota_expires_at: string;
  quota_warning: boolean;
  warning_threshold: number;
  expire_warning_threshold: number;
}

export function queryExpense() {
  return axios.get<Expense>('/api/v1/dashboard/expense');
}

export interface DataTop {
  user_id: number;
  app_id: number;
  app_key: string;
  model: string;
  call: number;
  models: number;
  tokens: number;
  user: number;
  app: number;
}

export interface DataTopRes {
  items: DataTop[];
}

export function queryDataTop(params: { days: number; data_type: string }) {
  return axios.get<DataTopRes>(`/api/v1/dashboard/data/top`, { params });
}

export interface ModelPercent {
  name: string;
  value: number;
}

export interface ModelPercentRes {
  models: string[];
  items: ModelPercent[];
}

export function queryModelPercent(days: number) {
  return axios.get<ModelPercentRes>(`/api/v1/dashboard/model/percent/${days}`);
}

export interface PerSecondParams {
  app_id: any;
  trace_id: any;
  user_id: any;
  key: string;
  models: string[];
  total_time: any;
  status: any;
  req_time: string[];
}

export interface PerSecondRes {
  rps: number;
  tps: number;
}

export function queryPerSecond(params?: PerSecondParams) {
  return axios.post<PerSecondRes>(`/api/v1/dashboard/per/second`, params);
}

export interface PerMinuteParams {
  app_id: any;
  trace_id: any;
  user_id: any;
  key: string;
  models: string[];
  total_time: any;
  status: any;
  req_time: string[];
}

export interface PerMinuteRes {
  rpm: number;
  tpm: number;
}

export function queryPerMinute(params?: PerMinuteParams) {
  return axios.post<PerMinuteRes>(`/api/v1/dashboard/per/minute`, params);
}

export interface QuotaWarningParams {
  quota_warning: boolean;
  warning_threshold: number;
  expire_warning_threshold: number;
}

export function submitQuotaWarning(params: QuotaWarningParams) {
  return axios.post(`/api/v1/dashboard/quota/warning`, params);
}
