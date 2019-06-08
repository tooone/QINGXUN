import request from '../request';
// 我的资料
export function coachGet(data) {
  return request({
    url: '/coach/get',
    method: 'post',
    data
  });
};