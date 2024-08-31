import { useState } from "react";

import { TouchableWithoutFeedback, View } from "react-native";

import { Container, ModalContent } from "./styles";
import { Button } from "../ui";

import { Calendar, type DateData, LocaleConfig } from "react-native-calendars";
import type { MarkedDates } from "react-native-calendars/src/types";
import { colors } from "@/styles/config";

import { ptBr } from "./localeCalendar";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

interface CalendarModalProps {
  onClose: () => void;
  handleFilter: (dateSelected: Date) => void;
}

export function CalendarModal({ onClose, handleFilter }: CalendarModalProps) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  function handleOnDayPress(date: DateData) {
    setDateNow(new Date(date.dateString));

    const marked = {} as MarkedDates;

    marked[date.dateString] = {
      selected: true,
      selectedColor: colors.blue,
      textColor: colors.white,
    };

    setMarkedDates(marked);
  }

  function handleFilterDate() {
    handleFilter(dateNow);
    onClose();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <ModalContent>
        <View style={{ width: "100%" }}>
          <Calendar
            onDayPress={handleOnDayPress}
            markedDates={markedDates}
            enableSwipeMonths
            theme={{
              todayTextColor: colors.red,
              selectedDayBackgroundColor: colors.blue,
              selectedDayTextColor: colors.white,
            }}
          />
        </View>

        <Button variant="primary" onPress={handleFilterDate}>
          Filtrar
        </Button>
      </ModalContent>
    </Container>
  );
}
