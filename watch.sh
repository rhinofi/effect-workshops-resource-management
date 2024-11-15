#!/usr/bin/env bash
set -ueo pipefail

bin=node_modules/.bin/

exec "$bin/tsc-watch" -b --noEmit --onSuccess "$bin/tsx $(echo "${@}")"