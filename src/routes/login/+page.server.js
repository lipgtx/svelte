import { fail } from '@sveltejs/kit';
import { sendPasswordlessLink } from '$lib/server/auth0';

// submit押下したときの処理
export const actions = {
  default: async({cookies, request, url}) =>{
    const data = await request.formData();
    const email = data.get('email');

    if(!email){
      return fail(400,{email, error:'missing'});
    }

    // メールアドレスのフォーマットチェック
    if(!/^.+@.+$/.test(email)){
      return fail(400,{email,error:'invalid_format'});
    }

      const state = crypto.randomUUID();
      const redirectUri = `${url.orign}/api/auth/callback`;
      await sendPasswordlessLink(email, state, redirestUri);

      cookies.set("state", state, {path:'/'});
      return {success:true};
  }
};