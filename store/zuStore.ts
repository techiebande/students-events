import { create } from "zustand";

type StateType = {
  createJob: {
    step: number;
    jobLocation: string;
    jobTimeRequirements: string;
    employmentDuration: string;
    duration: string;
  };
  nextStep: () => void;
  prevStep: () => void;
  changeJobLocation: (payload: string) => void;
  changeJobTimeRequirements: (payload: string) => void;
  changeEmploymentDuration: (payload: string) => void;
  changeDuration: (payload: string) => void;
};

const useStore = create<StateType>((set) => ({
  createJob: {
    step: 1,
    jobLocation: "onsite",
    jobTimeRequirements: "full time",
    employmentDuration: "Permanent",
    duration: "1 - 3 months",
  },
  nextStep: () =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        step:
          state.createJob.step < 2
            ? state.createJob.step + 1
            : state.createJob.step,
      },
    })),

  prevStep: () =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        step:
          state.createJob.step > 1
            ? state.createJob.step - 1
            : state.createJob.step,
      },
    })),
  changeJobLocation: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        jobLocation: payload,
      },
    })),
  changeJobTimeRequirements: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        jobTimeRequirements: payload,
      },
    })),
  changeEmploymentDuration: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        employmentDuration: payload,
      },
    })),
  changeDuration: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        duration: payload,
      },
    })),
}));
export default useStore;
