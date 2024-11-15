#!/usr/bin/env bash
set -ueo pipefail

bin=node_modules/.bin/

exec "$bin/tsc" -b --noEmit && $bin/tsx "${@}"