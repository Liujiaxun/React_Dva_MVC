
export default {
    namespace: 'musichall',
    state:{
        isLogin: false,
        message: '',
        user: {},
      },
    reducers: {
      LoginSuccess(state,{ payload }){
          console.log(123)
        return {
            ...state,
            isLogin:true,
            messages:'登录成功',
            user:payload
        }
      },
      LoginError(state,{ payload }){
        return {
            ...state,
            isLogin:false,
            messages:payload.messages,
        }
      }
    },
    effects: {
        *login({ payload }, { call, put }) {
            const { status,message} = yield call(login, payload);
            if (status) {
              yield put({type:'LoginSuccess'})
            } else {
              yield put({
                type: 'LoginError',
                payload: { message }
              });
            }
          }
    },
  }
const login = (payload) => {
    return {
        state:1,
        message:'123'
    }
  }