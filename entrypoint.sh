#!/usr/bin/env bash
set -eo pipefail

cp ../yarn.lock yarn.lock

command="$1"

case ${command} in
  start)
    # The '| cat' is to trick Node that this is an non-TTY terminal
    # then react-scripts won't clear the console.
    yarn start | cat
    ;;
  build)
    shift 1
    yarn run build "$@"
    ;;
  lint)
    shift 1
    yarn lint "$@"
    ;;
  test)
    shift 1
    yarn test "$@"
    ;;
  *)
    exec "$@"
    ;;
esac