@echo off
setlocal enabledelayedexpansion

echo ===== RENOMEADOR DE ARQUIVOS =====
echo.
echo Este script renomeara TODOS os arquivos nesta pasta
echo com o prefixo escolhido + numero sequencial.
echo.
echo Arquivos na pasta atual:
echo ------------------------
dir /b /a-d
echo ------------------------
echo.

set /p prefixo=Digite o prefixo desejado: 
echo.
echo Voce escolheu o prefixo: %prefixo%
echo.
set /p confirma=Tem certeza que deseja continuar? (S/N): 

if /i "%confirma%" neq "S" (
    echo Operacao cancelada pelo usuario.
    goto :fim
)

echo.
echo Iniciando renomeacao...
echo.

set contador=1

for %%F in (*) do (
    if not "%%F"=="%~nx0" (
        set num=00!contador!
        set num=!num:~-3!
        echo Renomeando: %%F -^> %prefixo%!num!%%~xF
        ren "%%F" "%prefixo%!num!%%~xF"
        set /a contador+=1
    )
)

echo.
echo Renomeacao concluida! %contador% arquivos foram processados.

:fim
echo.
pause