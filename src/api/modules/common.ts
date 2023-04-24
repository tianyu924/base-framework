import request from '@/api/request'
import type { ILoginUser, IUserInfo } from '@/types/user'

/**
 * @description 用户登录
 * @date 2023/4/24
*/
export const loginApi = async (data: ILoginUser): Promise<IResponse<IUserInfo>> => {
  return await request({
    url: '/login',
    method: 'POST',
    data
  })
}
