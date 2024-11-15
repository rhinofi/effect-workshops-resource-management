#!/usr/bin/env bash
set -ueo pipefail

bin=node_modules/.bin/

"$bin/tsc" -b --noEmit && exec $bin/tsx "${@}"