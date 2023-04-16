import {
  MutationFunction,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from '@tanstack/react-query'
import { useContext } from 'react'

import { ToastContext } from '../context/ToastProvider'
import { SERVER } from '../settings'
import { get, patch, post, put, remove } from './index'

type useHooksProps = {
  endpoint: string
  data?: any
  config?: any
}
interface useMutateHooksProps<T> {
  endpoint: string
  data?: T
  config?: {
    successMessage?: string
  }
}
type toastType = any

export function useGetAPI<T>({
  endpoint,
  data = {},
  config = {},
}: useHooksProps) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage } = data ?? {}
  const { dontKeepPreviousData = false } = config ?? {}
  return useQuery<T>(
    [`${SERVER}${endpoint}`],
    async () => get(endpoint).then(res => res.data),
    {
      keepPreviousData: dontKeepPreviousData,
      enabled: !!endpoint,
      onSuccess: (_data: any) => {
        successMessage && setToast(successMessage, 'Success')
      },
      onError: (err: unknown) => {
        if (err instanceof Error) {
          setToast(err.message, 'Error')
        }
      },
    },
  )
}

export function usePostAPI<T>({ endpoint, data, config }: useHooksProps) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage } = config ?? {}
  return useMutation<T>(
    async () => post(endpoint, data).then(res => res.data),
    {
      // enabled: !!endpoint && isEnabled,
      onSuccess: (_data: any) => {
        successMessage && setToast(successMessage, 'Success')
      },
      onError: (err: unknown) => {
        if (err instanceof Error) {
          setToast(err.message, 'Error')
        }
      },
    },
  )
}
export function usePatchAPI<T>({ endpoint, data, config }: useHooksProps) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage } = config ?? {}
  return useMutation<T>(
    async () => patch(endpoint, data).then(res => res.data),
    {
      onSuccess: (_data: any) => {
        successMessage && setToast(successMessage, 'Success')
      },
      onError: (err: any) => {
        setToast(err.data.detail, 'Error')
      },
    },
  )
}

export function usePassablePatchAPI<T>({
  endpoint,
  data,
  config,
}: useMutateHooksProps<T>) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage } = config ?? {}

  const patchAPI: MutationFunction<any, Partial<T>> = async (
    newData?: Partial<T>,
  ) => {
    const updatedData = { ...data, ...newData }
    return patch(endpoint, updatedData).then(res => res.data)
  }

  return useMutation(patchAPI, {
    onSuccess: (_data: any) => {
      successMessage && setToast(successMessage, 'Success')
    },
    onError: (err: any) => {
      setToast(err.data.detail, 'Error')
    },
  })
}

export function useRemoveAPI<T>({ endpoint, data, config }: useHooksProps) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage } = config ?? {}
  return useMutation<T>(
    async () => remove(endpoint, data).then(res => res.data),
    {
      onSuccess: (_data: any) => {
        successMessage && setToast(successMessage, 'Success')
      },
      onError: (err: unknown) => {
        if (err instanceof Error) {
          setToast(err.message, 'Error')
        }
      },
    },
  )
}

export function useGetInfiniteAPI<T extends { next?: unknown }>({
  endpoint,
  data = {},
}: useHooksProps) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage, hasParams } = data ?? {}
  return useInfiniteQuery<T>(
    [`${SERVER}${endpoint}`],
    async ({ pageParam = 1 }) =>
      get(`${endpoint}${hasParams ? '&' : '?'}page=${pageParam}`).then(
        res => res.data,
      ),
    {
      getNextPageParam: lastPage => lastPage?.next ?? false,
      enabled: !!endpoint,
      onSuccess: (_data: any) => {
        successMessage && setToast(successMessage, 'Success')
      },
      onError: (err: unknown) => {
        if (err instanceof Error) {
          setToast(err.message, 'Error')
        }
      },
    },
  )
}

export function usePutAPI({ endpoint, data, config }: useHooksProps) {
  const { setToast }: toastType = useContext(ToastContext)
  const { successMessage } = config ?? {}
  return useMutation(async () => put(endpoint, data).then(res => res.data), {
    onSuccess: (_data: any) => {
      successMessage && setToast(successMessage, 'Success')
    },
    onError: (err: { data: { error: any } }) => {
      setToast(err?.data?.error, 'Error')
    },
  })
}
