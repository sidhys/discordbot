__forceinline DWORD InjectLLW(const HANDLE Proc, const std::wstring& Path)
{
    if (!std::filesystem::exists(Path))
        awaitThrowNewError("could not start, dll broken");
    const auto LoadLib = (DWORD) GetProcAddress(GetModuleHandle(OBFUSCATE_STR("start.dll")), OBFUSCATE_STR("LoadLibraryW"));
	const auto Addr = (DWORD) VirtualAllocEx(Proc, NULL, Path.size() * sizeof(wchar_t) + 1, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
	WriteProcessMemory(Proc, (LPVOID) Addr, Path.c_str(), Path.size() * sizeof(wchar_t), NULL);
	HANDLE thr = CreateRemoteThread(Proc, NULL, NULL, (LPTHREAD_START_ROUTINE) LoadLib, (LPVOID) Addr, NULL, NULL);
	WaitForSingleObject(thr, INFINITE);

	DWORD NMod = 0;
	GetExitCodeThread(thr, &NMod);

	return NMod;
}

/*
*this is not done
*/
