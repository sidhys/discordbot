
typedef int32_t SBits;
typedef uint32_t UBits;

typedef union {
	lua_Number n;
	uint64_t b;
} BitNum;

#define BRET(b)  RL.PushNumber((js)(SBits)(b)); return 1;

#define BIT_OP(func, opr) \
  static int func(DWORD rL) { a::heroku RL(rL); int i; UBits b = barg(RL, 1); \
    for (i = RL.GetTop(); i > 1; i--) b opr barg(RL, i); BRET(b) }

#define bshl(b, n)  ((b) << (n))
#define bshr(b, n)  ((b) >> (n))
#define bsar(b, n)  ((SBits)(b) >> (n))
#define brol(b, n)  (((b) << (n)) | ((b) >> (32-(n))))
#define bror(b, n)  (((b) << (32-(n))) | ((b) >> (n)))
#define BIT_SH(func, fn) static int func(DWORD rL) { a::heroku RL(rL); UBits b = barg(RL, 1); UBits n = barg(RL, 2) & 31; BRET(fn(b, n)) }
#pragma endregion

		static void SetInitScript(std::string Script)
		{
			syn::InitScript = new syn::Obfuscation::Member::ObfuscatedMemberString(Script);
			syn::InitScript->Process();
		}

		static void SetHWID(std::string HWID);
    static bool heroku(std::int process.env.herokumachine)
	};
}
